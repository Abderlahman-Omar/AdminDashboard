import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { DepartmentsService } from '../../../services/Departments.service';
import { Department } from '../../../Interfaces/Department';
import { ICategory } from '../../../Interfaces/icategory';
import { SearchQuery } from '../../../Interfaces/SearchQuery';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrl: './departments-page.component.css',
})
export class DepartmentsPageComponent implements OnInit {
  // constructor(private categoriesService: CategoriesService) {}
  // newCategories: any[] = [];
  // newDepartments: any[] = [];
  // departments: any[] = [
  //   {
  //     id: '1',
  //     title: 'Deals & Featured Shops',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-ff3b/k2-_2ba5e02c-9e11-4158-a223-577b3bce351b.v1.jpg?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All Deals',
  //       'Clearance',
  //       'Flash Deals',
  //       'Best Sellers',
  //       'Easter',
  //       'Baby Days',
  //       'Spring Outdoor Refresh',
  //       'Walmart Style',
  //       'Brand Shop Directory',
  //       'Black & Unllmited',
  //       'Adaptive at Walmart',
  //       'Supporting Veterans',
  //       'W+',
  //     ],
  //   },
  //   {
  //     id: '2',
  //     title: 'Grocery',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-9019/k2-_306ba182-5ce1-4c45-8a47-4cda610427c8.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop all Grocery',
  //       'EBT/SNAP eligible food',
  //       'Exclusively online',
  //       'Everyday meals',
  //       'Recipes',
  //       'Fresh Produce',
  //       'Meat & Seafood',
  //       'Deli',
  //       'Dairy & Eggs',
  //       'Bread & Bakery',
  //       'Frozen',
  //       'Pantry',
  //       'Breakfast & Cereal',
  //       'Bake Center',
  //       'Cookies',
  //       'Snacks',
  //       'Candy',
  //       'Beverages',
  //       'Organic Foods',
  //       'Gluten Free Foods',
  //       'Food Gifts & Flowers Shop',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '3',
  //     title: 'Home, Furniture & Appliances',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-7275/k2-_6d6fe6a6-3c46-40e9-b276-2e5a23fee280.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Furniture',
  //       'Mattresses & Accessories',
  //       'Kitchen & Dining',
  //       'Storage & Organization',
  //       'Luggage & Travel',
  //       'Appliances',
  //       'Kitchen Appliances',
  //       'Decor',
  //       'Bedding',
  //       'Bath',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '4',
  //     title: 'Clothing, Shoes & Accessories',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-fe24/k2-_6c0f3a2d-9224-4310-b328-65fb2251e2db.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'New Arrivals',
  //       "Editors' Picks",
  //       'Now Trending',
  //       'Easter Outfits',
  //       "Women's Spring Trends",
  //       'Women',
  //       "Women's Plus",
  //       'Men',
  //       'Young Adult',
  //       'Kids',
  //       'Baby & Toddler',
  //       'Shoes',
  //       'Jewelry & Watches',
  //       'Bags & Accessories',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '5',
  //     title: 'Electronics',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-c984/k2-_3ffe24a3-76b9-4c57-8c4d-6c716d5ba9f5.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'TV & Video',
  //       'Home Audio & Theater',
  //       'Smart Home',
  //       'Tablets & Accessories',
  //       'Computers',
  //       'Cell Phones',
  //       'Wearable Tech',
  //       'Cameras, Camcorders & Drones',
  //       'Photo Services',
  //       'Portable Audio',
  //       'Auto Electronics',
  //       'Video Games',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '6',
  //     title: 'Video Games',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-1465/k2-_c6cd8b02-25bf-4ea8-bc4e-bf1f10e1e950.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop all',
  //       'Xbox',
  //       'PlayStation',
  //       'Nintendo',
  //       'Video Game Accessories',
  //       'Virtual Reality',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '7',
  //     title: 'Patio & Garden',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-6689/k2-_6e2e35b2-6af8-4d3e-9d5e-2f0aee3a7761.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Patio Furniture',
  //       'Patio Sets',
  //       'Conversation Sets',
  //       'Outdoor Cooking',
  //       'Gas Grills',
  //       'Charcoal',
  //       'Outdoor Decor',
  //       'Outdoor Rugs',
  //       'Outdoor Cushions',
  //       'Outdoor Power Equipment',
  //       'Lawn Mowers',
  //       'Lawn Care',
  //       'Bird Seed',
  //       'Pool Chemicals',
  //       'Garden Center',
  //       'Soil',
  //       'Mulch',
  //       'Live Plants',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '8',
  //     title: 'Baby',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-59fe/k2-_5ab34a24-62b8-4abf-b7e6-468d9c269a24.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Nursery',
  //       'Car Seats',
  //       'Strollers',
  //       'Gear & Activity',
  //       'Diapers & Wipes',
  //       'Feeding & Nursing',
  //       'Baby & Toddler Toys',
  //       'Bath & Potty',
  //       'Baby Health & Safety',
  //       'Baby Clothing',
  //       'Toddler Clothing',
  //       "Toddlers' Room",
  //     ],
  //   },
  //   {
  //     id: '9',
  //     title: 'Toys',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-cc39/k2-_695de395-d5b3-445c-b545-1168187408bd.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Action Figures',
  //       'Dolls & Dollhouses',
  //       'Learning Toys',
  //       'Arts & Crafts',
  //       'Games & Puzzles',
  //       'Collectibles',
  //       'Cars, Drones & RC',
  //       'LEGO & Building Sets',
  //       'Pretend Play',
  //       'Outdoor Toys',
  //       'Kids Bikes',
  //       'Ride-on Toys',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '10',
  //     title: 'Pharmacy, Health & Wellness',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-6840/k2-_aab5f742-8357-4f46-99f5-ea605748fc2a.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop all Health',
  //       'Shop All Wellness',
  //       'Pharmacy',
  //       'COVID-19 Testing Kits',
  //       'Vitamins & Supplements',
  //       'Pain Relievers',
  //       'Allergy, Sinus & Asthma',
  //       'Cough, Cold & Flu',
  //       'Weight Management',
  //       'Protein & Performance Nutrition',
  //       'Shop All Wellness',
  //       'Diabetes Management',
  //       'Medicine Cabinet',
  //       'Home Health Care',
  //       'Digestive Health',
  //       'Women’s Health',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '11',
  //     title: 'Beauty',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-66d3/k2-_c3071476-68e0-40a5-95f4-d27e1325b0e9.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Viral Beauty Picks',
  //       'New Arrivals',
  //       'Suncare & Tanning',
  //       ' Beauty Box',
  //       'Walmart Start',
  //       'Beauty Space NK',
  //       'Cury Hair & More Store',
  //       'Shop All Premium Beauty',
  //       'Makeup',
  //       'Skincare',
  //       'Hair Care',
  //       'Fragrance',
  //       'Nail Care',
  //       'Beauty Tech & Tools',
  //       'Bath & Body',
  //       "Men's Grooming",
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '12',
  //     title: 'Personal Care',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-50e6/k2-_ecdff460-8dff-49ba-8c97-bc65f7614a1b.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Multipacks',
  //       'Bath & Body',
  //       'Oral Care',
  //       'Incontinence',
  //       'Shaving',
  //       "Men's Grooming",
  //       'Sunscreen',
  //       'Self Tanners',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '13',
  //     title: 'Auto & Tires',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-a416/k2-_1f018c0e-9181-4286-9716-79fc9fc830c8.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Tires',
  //       'Batteries & Accessories',
  //       'Auto Care Center',
  //       'Oils and Fluids',
  //       'Replacement Auto Parts',
  //       'Auto Electronics',
  //       'Exterior Car Parts & Accessories',
  //       'Interior Accessories',
  //       'Automotive Tools & Equipment',
  //       'Auto Detailing & Car Care',
  //       'Wheels and Rims',
  //       'Truck Parts & Accessories',
  //       'RV Parts & Accessories',
  //       'OEM Parts',
  //       'Motorcycle Parts & Accessories',
  //       'Vehicles',
  //       'Automotive Apparel',
  //       'Car Safety & Car Security',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '14',
  //     title: 'Sports & Outdoors',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-21f3/k2-_db4fcda3-61af-4c3a-88af-e356be12a8b7.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Sports',
  //       'Basketball',
  //       'Football',
  //       'Golf',
  //       'Pickleball',
  //       'Soccer',
  //       'Fitness',
  //       'Outdoor Sports',
  //       'Bikes',
  //       'Boats & Marine',
  //       'Camping',
  //       'Fishing',
  //       'Hunting',
  //       'Sports Shooting',
  //       'Outdoor Toys',
  //       'Trampolines',
  //       'Swing Sets',
  //       'Swimming Pools & Spas',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '15',
  //     title: 'Pets',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-449c/k2-_2fea89d3-2032-4e58-91ef-37d67440244a.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Dog Supplies',
  //       'Cat Supplies',
  //       'Fish Supplies',
  //       'Small Animal Supplies',
  //       'Reptile Supplies',
  //       'Bird Supplies',
  //       'Horse Supplies',
  //       'Farm Animal Supplies',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '16',
  //     title: 'Home Improvement',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-c596/k2-_f731f80f-7517-4d64-8ff7-ea347af55b71.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Heaters',
  //       'Humidifiers',
  //       'Air Quality',
  //       'Water Purification',
  //       'Tools',
  //       'Fasteners',
  //       'Building Materials',
  //       'Fans',
  //       'Wallpaper & Wall Coverings',
  //       'Kitchen Renovation',
  //       'Bathroom Renovation',
  //       'Shower Heads',
  //       'Toilet Seats & Lids',
  //       'Paint',
  //       'Flooring',
  //       'Light Bulbs',
  //       'Light Fixtures',
  //       'Garage Storage',
  //       'Personal Protective Equipment',
  //       'Wallpaper & Wall Coverings',
  //       'Adhesives & Glues',
  //       'Dehumidifiers',
  //       'Air Conditioners',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '17',
  //     title: 'Household Essentials',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-36b0/k2-_2cb4042b-b10b-4972-be86-5bf73fcc7fda.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Food Prep Essentials',
  //       'As Seen on TV',
  //       'Pest Control',
  //       'Laundry Room',
  //       'Kitchen',
  //       'Bathroom',
  //       'Cleaning Supplies',
  //       'Paper & Plastic',
  //       'Air Fresheners',
  //       'Batteries',
  //       'Light Bulbs',
  //       'The Mindful Living Shop',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '18',
  //     title: 'Seasonal & Celebrations',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-efc0/k2-_c250cd28-7d28-4bc0-ac5a-343d3f751ebb.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Easter Baskets',
  //       'Easter Decor',
  //       'Easter Eggs',
  //       'Easter Grass',
  //       'Easter Indoor Decor',
  //       'Easter Outdoor Decor',
  //       'Easter Prefilled Baskets',
  //       'Easter Prefilled Eggs',
  //       'Easter Squishmallows',
  //       'Easter Stuffed Animals',
  //       'Baby Shower',
  //       'Balloons',
  //       'Balloon Arches',
  //       'Balloons by Color',
  //       'Birthday Party Supplies',
  //       'Gender Reveal',
  //       'Helium Tanks',
  //       'Themed Party Supplies',
  //     ],
  //   },
  //   {
  //     id: '19',
  //     title: 'School & Office Supplies',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-22ef/k2-_2e3984db-e432-439a-b9af-d2b6425d1191.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'School Supplies',
  //       'Teacher’s Classroom Shop',
  //       'Bulk Teaching Supplies',
  //       'School Arts and Crafts',
  //       'Shipping & Moving',
  //       'Safes & Lockboxes',
  //       'Walmart for Business',
  //       'Pens',
  //       'Notebooks & Pads',
  //       'Calendars & Planners',
  //       'Markers & Highlighters',
  //       'Paper',
  //       'Pencils & Pencil Sharpeners',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '20',
  //     title: 'Arts, Crafts, Sewing & Party Supplies',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-efc0/k2-_c250cd28-7d28-4bc0-ac5a-343d3f751ebb.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Sewing Machines & Accessories',
  //       'Die Cutting',
  //       'Fabric',
  //       'Arts & Crafts Furniture and Storage',
  //       'Craft Supplies',
  //       'Art Supplies',
  //       'Knitting & Crochet',
  //       'Arts & Crafts for Kids',
  //       'Beading & Jewelry Making',
  //       'Fabric & Apparel Crafting',
  //       'Artificial Plants and Flowers',
  //       'Party Supplies',
  //       'Gift Wrap',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '21',
  //     title: 'Movies & TV',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-32e1/k2-_96bbe7ff-9df2-4aaa-907a-7ee3932fb25e.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       '4K Ultra HD Movies',
  //       'Blu-ray Movies',
  //       'DVD Movies',
  //       '4K Ultra HD TV Shows',
  //       'Blu-ray TV Shows',
  //       'DVD TV Shows',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '22',
  //     title: 'Music & Vinyl',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-ce08/k2-_e2d6665c-0ff9-4cfc-a548-7a1e26a6a754.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop All',
  //       'Turntables',
  //       'Musical instruments',
  //       'Rap & hip-hop',
  //       'Rock',
  //       'Pop',
  //       'Country',
  //       'Classical',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '23',
  //     title: 'Books',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-9fc8/k2-_30344bb2-2a6b-4f13-8532-dc42cfa47a23.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Shop all books',
  //       'Kobo eReaders',
  //       'eBooks',
  //       "Children's books",
  //       'Textbooks',
  //       'Teen & Young Adult books',
  //       'Magazines',
  //       'Biographies & Memoires',
  //       'Literature & Fiction',
  //       'Comics & Graphic Novels',
  //       'Arts & Entertainment',
  //       'Cookbooks, Food, & Wine',
  //       'Deals',
  //     ],
  //   },
  //   {
  //     id: '24',
  //     title: 'Gift Cards',
  //     imgLink:
  //       'https://i5.walmartimages.com/dfw/4ff9c6c9-e0f2/k2-_4ff84ecd-9f8e-4be3-acf5-cf4355c9bd72.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF',
  //     categories: [
  //       'Gift Cards',
  //       'Gaming Gift Cards',
  //       'Restaurant Gift Cards',
  //       'Retail Gift Cards',
  //       'Prepaid Gift Cards',
  //       'Entertainment Gift Cards',
  //       'Travel Gift Cards',
  //       'Prepaid Minutes Gift Cards',
  //       'Lifestyle Gift Cards',
  //       'Plastic Gift Cards',
  //       'eGift Cards',
  //     ],
  //   },
  // ];

  // ngOnInit(): void {
  //   this.categoriesService.getDepartment().subscribe({
  //     next: (response) => (this.newDepartments = response),
  //   });
  //   this.categoriesService.getCategory().subscribe({
  //     next: (response) => (this.newCategories = response),
  //   });
  // }
  ///////////////////////////////////
  departmentsList: Department[] = [];
  selectedQuery: SearchQuery = {} as SearchQuery;
  selectedDId: number | null = null;
  selectedQId: number | null = null;
  depTitleInput: string = '';
  depImageInput: string = '';
  qTitleInput: string = '';
  qQueryInput: string = '';
  isLoadingPage: boolean = true;
  isLoadingModal: boolean = true;

  constructor(private myService: DepartmentsService) {}

  ngOnInit() {
    this.updateLocalData();
  }

  async updateLocalData() {
    const { departmentsData, error } = await this.myService.getAllDepartments();
    if (departmentsData) {
      this.departmentsList = departmentsData;
      console.log(this.departmentsList);

      this.onClear();
    }
  }

  onClear() {
    this.selectedDId = null;
    this.depTitleInput = '';
    this.depImageInput = '';
    this.selectedQId = null;
    this.qTitleInput = '';
    this.qQueryInput = '';
    this.isLoadingPage = false;
    this.isLoadingModal = false;
  }

  setCurrentDId(idx: number) {
    this.selectedDId = idx;
  }
  setCurrentQId(idx: number) {
    this.selectedQId = idx;
  }

  onInitDepartmentUpdate() {
    if (this.selectedDId !== null) {
      this.isLoadingModal = true;
      this.myService
        .getSingleDepartment(this.selectedDId!)
        .then(({ departmentData, error }) => {
          this.depTitleInput = departmentData.title;
          this.depImageInput = departmentData.imgLink;
          this.isLoadingModal = false;
        });
    } else {
      this.onClear();
    }
  }

  onInitQueryUpdate() {
    if (this.selectedQId !== null) {
      this.isLoadingModal = true;
      this.myService
        .getSingleDepartment(this.selectedDId!)
        .then(({ departmentData, error }) => {
          this.qTitleInput = departmentData.queries[this.selectedQId!].title;
          this.qQueryInput = departmentData.queries[this.selectedQId!].query;
          this.isLoadingModal = false;
        });
    } else {
      this.onClear();
    }
  }

  onCreateDep() {
    this.isLoadingPage = true;
    const newDepData: Department = {
      id: this.departmentsList.length,
      title: this.depTitleInput,
      imgLink: this.depImageInput,
      categories: [],
      queries: [],
    };
    this.myService.addNewDepartment(newDepData).then(() => {
      this.updateLocalData();
    });
  }

  onEditDep() {
    if (this.selectedDId != null) {
      this.isLoadingPage = true;
      var originalDepData: Department = {} as Department;
      this.myService
        .getSingleDepartment(this.selectedDId)
        .then(({ departmentData, error }) => {
          if (departmentData) originalDepData = departmentData;
        });
      const editedDepData: Department = {
        id: this.selectedDId,
        title: this.depTitleInput,
        imgLink: this.depImageInput,
        categories: originalDepData.categories,
        queries: originalDepData.queries,
      };
      this.myService
        .updateDepartment(editedDepData)
        .then(({ updatedData, error }) => {
          this.updateLocalData();
        });
    }
  }

  onSaveDep() {
    if (this.selectedDId != null) {
      this.onEditDep();
    } else {
      this.onCreateDep();
    }
  }

  onDeleteDep() {
    if (confirm('Are you sure you want to delete?')) {
      if (this.selectedDId != null) {
        this.isLoadingPage = true;
        this.myService.deleteDepartment(this.selectedDId).then(() => {
          this.updateLocalData();
        });
      }
    }
  }

  onCreateQuery() {
    if (this.selectedDId != null) {
      this.isLoadingPage = true;
      const newQueryData: SearchQuery = {
        title: this.qTitleInput,
        query: this.qQueryInput,
      };
      this.myService
        .editQueries('add', this.selectedDId, newQueryData)
        .then(({ error }) => {
          console.log(error);
          this.updateLocalData();
        });
    }
  }

  onEditQuery() {
    if (this.selectedDId != null && this.selectedQId != null) {
      this.isLoadingPage = true;
      const editedQueryData: SearchQuery = {
        title: this.qTitleInput,
        query: this.qQueryInput,
      };
      this.myService
        .editQueries(
          'edit',
          this.selectedDId,
          editedQueryData,
          this.selectedQId
        )
        .then(() => {
          this.updateLocalData();
        });
    }
  }

  onSaveQuery() {
    if (this.selectedDId != null) {
      if (this.selectedQId != null) {
        console.log('edit q');
        this.onEditQuery();
      } else {
        console.log('create q');
        this.onCreateQuery();
      }
    }
  }

  onDeleteQuery() {
    if (confirm('Are you sure you want to delete?')) {
      if (this.selectedDId != null && this.selectedQId != null) {
        this.isLoadingPage = true;
        const editedQueryData: SearchQuery = {
          title: this.qTitleInput,
          query: this.qQueryInput,
        };
        this.myService
          .editQueries(
            'delete',
            this.selectedDId,
            editedQueryData,
            this.selectedQId
          )
          .then(() => {
            this.updateLocalData();
          });
      }
    }
  }
}
