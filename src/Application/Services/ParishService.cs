﻿using Application.Interfaces;
using AutoMapper;
using Core.MappingProfile;
using Core.Models;
using Core.Pagination;
using Data.Database;
using Data.Entities;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ParishService : IParishService
    {
        private readonly ChurchContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IAuditService _auditService;
        public ParishService(ChurchContext dbContext, IMapper mapper, IAuditService auditService)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _auditService = auditService;
        }


        /// <summary>
        /// Get all Parishioners of a Parish
        /// </summary>
        /// <param name="id"></param>
        /// <param name="pageNumber"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public async Task<PageResult<IEnumerable<ParishionerViewModel>>> GetParishioners(Guid id, int pageNumber, int pageSize)
        {
            var request = new PageRequest(pageNumber, pageSize);

            var parishioners = await _dbContext.Parishioners
                .Where(x => x.ParishId == id)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => ParishionerMapping.MapDto(x))
                .ToListAsync();

            var count = await _dbContext.Parishioners.CountAsync(x => x.ParishId == id);

            return new PageResult<IEnumerable<ParishionerViewModel>>
                (parishioners, request.PageNumber, request.PageSize, count);
        }

        /// <summary>
        /// Get all Parishs
        /// </summary>
        /// <param name="query"></param>
        /// <param name="pageNumber"></param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public async Task<PageResult<IEnumerable<ParishViewModel>>> GetAllParishs(string query, int pageNumber, int pageSize)
        {
            var request = new PageRequest(pageNumber, pageSize);
            var parishQuery = _dbContext.Parishes.AsQueryable();
            if (!string.IsNullOrEmpty(query))
            {
                parishQuery.Where(x => x.Name.Contains(query, StringComparison.OrdinalIgnoreCase));
            }

            var parishs = await _dbContext.Parishes
              .Include(x => x.Parishioners.Where(x => x.Type == ParishionerType.Priest))
              .Skip((request.PageNumber - 1) * request.PageSize)
              .Take(request.PageSize)
              .ToListAsync();

            var models = new List<ParishViewModel>();

            foreach (var parish in parishs)
            {
                var p = ParishMapping.MapDto(parish);
                p.MemberCount = await _dbContext.Parishioners
                    .CountAsync(x => x.ParishId == parish.Id);

                if (parish.Parishioners.Count > 0)
                    p.Priest = ParishionerMapping.MapDto(parish.Parishioners.FirstOrDefault(x => x.Type == ParishionerType.Priest));

                models.Add(p);
            }

            var count = await parishQuery.CountAsync();

            return new PageResult<IEnumerable<ParishViewModel>>
                (models, request.PageNumber, request.PageSize, count);
        }

        /// <summary>
        /// Get a Parish
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ParishViewModel> GetParish(Guid id)
        {
            var parish = await _dbContext.Parishes
                .Include(x => x.Parishioners.Where(x => x.Type == ParishionerType.Priest))
                .FirstOrDefaultAsync(x => x.Id == id);

            if (parish == null)
            {
                return null;
            }

            var viewModel = ParishMapping.MapDto(parish);

            if (parish.Parishioners.Any())
                viewModel.Priest = ParishionerMapping.MapDto(parish.Parishioners.FirstOrDefault(x => x.Type == ParishionerType.Priest));

            viewModel.MemberCount = await _dbContext.Parishioners
                .CountAsync(x => x.ParishId == id);

            return viewModel;
        }
    }
}
