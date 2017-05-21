using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace FruitCorrect.Northwind
{
    public partial class CategoryEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "FruitCorrect.Northwind.CategoryEditor";

        public CategoryEditorAttribute()
            : base(Key)
        {
        }
    }
}
