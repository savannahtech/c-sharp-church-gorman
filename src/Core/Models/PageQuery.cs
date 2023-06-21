﻿namespace Core.Models
{
    public class PageQuery
    {
        public string Query { get; set; }

        public int PageNumber { get; set; } = 1;

        public int PageSize { get; set; } = 10;
    }
}
