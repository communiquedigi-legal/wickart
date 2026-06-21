import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Save, Image as ImageIcon, UploadCloud, X, Plus, Trash2, Edit2 } from 'lucide-react';

export function AddProductPage() {
  const [tags, setTags] = useState<string[]>(['Smartphones']);
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-16 z-10 bg-slate-50/90 backdrop-blur-md py-4 border-b border-slate-200/60 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <span>Home</span>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-slate-900 font-medium">Add Product</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Add New Product</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter product name" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select a seller <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="">Search Seller...</option>
                    <option value="1">City Square Mart</option>
                    <option value="2">Silicon Valley Store</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Product Type <span className="text-red-500">*</span></label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="physical">Physical Product</option>
                    <option value="digital">Digital Product</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
                <textarea rows={3} placeholder="Brief summary of the product..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select a Tax</label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="">Search tax...</option>
                    <option value="1">GST 18%</option>
                    <option value="2">Exempt 0%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select an Indicator</label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="none">None</option>
                    <option value="veg">Vegetarian</option>
                    <option value="nonveg">Non-Vegetarian</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Made in Country</label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="">Search country...</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Brand</label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option value="">Search Brand...</option>
                    <option value="1">Samsung</option>
                    <option value="2">Apple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Total Allowed Quantity</label>
                  <input type="number" placeholder="Total Allowed Quantity" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Minimum Order Quantity</label>
                  <input type="number" defaultValue={1} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Quantity Step Size</label>
                  <input type="number" defaultValue={1} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">HSN Code</label>
                  <input type="text" placeholder="HSN Code" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Warranty Period</label>
                  <input type="text" placeholder="e.g., 1 Year" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Guarantee Period</label>
                  <input type="text" placeholder="e.g., 6 Months" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Tags</label>
                <div className="w-full min-h-[42px] px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap gap-2 items-center focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                  {tags.map((tag, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md shadow-sm">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-full p-0.5 transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  <input 
                    type="text" 
                    placeholder="AC, Cooler, Smartphones, etc. (Press enter to add)" 
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-slate-400 min-w-[200px]" 
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">These tags help in search results</p>
              </div>
            </CardContent>
          </Card>

          {/* Descriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Descriptions & Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Type of Product</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none mb-4 max-w-md">
                  <option value="">Select Type</option>
                  <option value="simple">Simple Product</option>
                  <option value="variable">Variable Product</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Description</label>
                <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                  {/* Fake Editor Toolbar */}
                  <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs font-bold font-serif">B</button>
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs italic font-serif">I</button>
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs underline font-serif">U</button>
                    <div className="w-px h-4 bg-slate-300 mx-1"></div>
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded"><ImageIcon className="w-4 h-4" /></button>
                  </div>
                  <textarea rows={6} className="w-full p-4 text-sm outline-none resize-y" placeholder="Write a detailed product description..."></textarea>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Extra Description</label>
                <div className="border border-slate-200 rounded-lg overflow-hidden flex flex-col">
                  {/* Fake Editor Toolbar */}
                  <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs font-bold font-serif">B</button>
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs italic font-serif">I</button>
                    <button className="p-1.5 text-slate-500 hover:bg-slate-200 rounded text-xs underline font-serif">U</button>
                  </div>
                  <textarea rows={4} className="w-full p-4 text-sm outline-none resize-y" placeholder="Any additional information..."></textarea>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Page Title</label>
                <input type="text" placeholder="SEO page title" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                <p className="text-xs text-slate-500 mt-1">Optimize your page title for search engines</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Meta Keywords</label>
                <input type="text" placeholder="Type keywords and press enter to create tags" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Meta Description</label>
                <textarea rows={3} placeholder="Write a compelling description for search results" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-amber-800">No categories available. Please Select Seller First.</p>
              </div>
            </CardContent>
          </Card>

          {/* Product Media */}
          <Card>
            <CardHeader>
              <CardTitle>Product Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex justify-between">
                  <span>Main Image</span>
                  <span className="text-xs text-slate-400 font-normal">180x180 px</span>
                </label>
                <div className="mt-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-colors p-6 flex flex-col items-center justify-center text-center cursor-pointer group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">Drop image here</p>
                  <p className="text-xs text-slate-500 mt-1">or click to browse</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex justify-between">
                  <span>Product Gallery</span>
                  <span className="text-xs text-slate-400 font-normal">Max 10 (500x500px)</span>
                </label>
                <div className="mt-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-6 flex flex-col items-center justify-center text-center">
                  <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                  <p className="text-sm font-medium text-slate-700">No gallery images added yet</p>
                  <button className="mt-3 px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium hover:bg-slate-100 transition-colors">
                    Add Images
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Video Type</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                  <option value="none">None</option>
                  <option value="youtube">YouTube</option>
                  <option value="vimeo">Vimeo</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Stock & Shipping */}
          <Card>
            <CardHeader>
              <CardTitle>Stock & Shipping</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deliverable Type</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                  <option value="all">All</option>
                  <option value="included">Included Zipcodes</option>
                  <option value="excluded">Excluded Zipcodes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deliverable Zipcodes</label>
                <input type="text" placeholder="Search Zipcode..." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Low Stock Limit</label>
                <input type="number" placeholder="Low stock limit" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                <p className="text-xs text-slate-500 mt-1">Seller's default applies if left empty</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                  <option value="">Select Pickup Location</option>
                  <option value="loc1">Main Warehouse</option>
                </select>
              </div>
            </CardContent>
          </Card>
          
          {/* SEO Image */}
          <Card>
             <CardHeader>
                <CardTitle className="text-sm text-slate-600">SEO Open Graph Image</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 p-4 flex flex-col items-center justify-center text-center">
                  <ImageIcon className="w-6 h-6 text-slate-300 mb-2" />
                  <p className="text-xs text-slate-500 mb-2">1200 x 630 pixels for social media</p>
                  <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium hover:bg-slate-100 transition-colors">
                    Upload
                  </button>
                </div>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
