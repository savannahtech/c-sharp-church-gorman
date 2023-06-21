﻿using System;
using System.ComponentModel.DataAnnotations;
using Data.Models;

namespace Core.Models
{
    public class CreateParishionerModel : BaseViewModel
    {
        /// <summary>
        /// First Name
        /// </summary>
        [Required]
        public string FirstName { get; set; }

        /// <summary>
        /// Last Name
        /// </summary>
        [Required]
        public string LastName { get; set; }

        /// <summary>
        /// Date of Birth
        /// </summary>
        public DateTime? DateOfBirth { get; set; }

        /// <summary>
        /// Birth Location
        /// </summary>
        [Required]
        public string Location { get; set; }

        /// <summary>
        /// Parishioner Phone Number
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Parishioner Email
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Home Address
        /// </summary>
        public string HomeAddress { get; set; }

        /// <summary>
        /// Home Postcode
        /// </summary>
        public string PostCode { get; set; }

        /// <summary>
        /// Parishioner Occupation
        /// </summary>
        public string Occupation { get; set; }

        /// <summary>
        /// Father
        /// </summary>
        public Guid? Father { get; set; }

        /// <summary>
        /// Type of Parishioner
        /// </summary>
        public ParishionerType Type { get; set; }

        /// <summary>
        /// Mother
        /// </summary>
        public Guid? Mother { get; set; }

        /// <summary>
        /// Partner
        /// </summary>
        public Guid? Partner { get; set; }
    }
}