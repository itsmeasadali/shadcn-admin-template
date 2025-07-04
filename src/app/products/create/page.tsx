import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Save, 
  X,
  Package,
  DollarSign,
  Image as ImageIcon,
  Tag,
  BarChart3,
  Settings,
  FileText,
  Plus,
  Trash2,
  Upload,
  AlertTriangle,
  CheckCircle,
  Truck,
  Star
} from "lucide-react"

export default function CreateProductPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/products">
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Create New Product</h1>
              <p className="text-muted-foreground">
                Add a new product to your catalog.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button variant="outline">
                Save as Draft
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Publish Product
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Tabs defaultValue="basic" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="basic">Basic Information</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing & Inventory</TabsTrigger>
                  <TabsTrigger value="media">Media & Images</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping & Variants</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Package className="h-5 w-5 mr-2" />
                        Product Information
                      </CardTitle>
                      <CardDescription>Basic product details and description</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="productName">Product Name *</Label>
                        <Input id="productName" placeholder="Wireless Bluetooth Headphones" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Product Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Detailed description of your product..."
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shortDescription">Short Description</Label>
                        <Textarea 
                          id="shortDescription" 
                          placeholder="Brief summary for product listings..."
                          rows={2}
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="brand">Brand</Label>
                          <Input id="brand" placeholder="Apple, Samsung, etc." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="model">Model/SKU</Label>
                          <Input id="model" placeholder="WH-1000XM4" />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="electronics">Electronics</SelectItem>
                              <SelectItem value="clothing">Clothing</SelectItem>
                              <SelectItem value="books">Books</SelectItem>
                              <SelectItem value="home">Home & Garden</SelectItem>
                              <SelectItem value="sports">Sports & Outdoors</SelectItem>
                              <SelectItem value="toys">Toys & Games</SelectItem>
                              <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subcategory">Subcategory</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subcategory" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="headphones">Headphones</SelectItem>
                              <SelectItem value="speakers">Speakers</SelectItem>
                              <SelectItem value="smartphones">Smartphones</SelectItem>
                              <SelectItem value="laptops">Laptops</SelectItem>
                              <SelectItem value="accessories">Accessories</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tags">Tags</Label>
                        <Input id="tags" placeholder="wireless, bluetooth, premium, noise-cancelling" />
                        <p className="text-sm text-muted-foreground">Separate tags with commas</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Pricing Information
                      </CardTitle>
                      <CardDescription>Set your product pricing and cost structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="price">Selling Price *</Label>
                          <Input id="price" type="number" placeholder="299.99" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="comparePrice">Compare at Price</Label>
                          <Input id="comparePrice" type="number" placeholder="399.99" />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="costPrice">Cost per Item</Label>
                          <Input id="costPrice" type="number" placeholder="150.00" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="profit">Profit</Label>
                          <Input id="profit" type="number" placeholder="149.99" disabled />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="taxable">Tax Settings</Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="taxable" />
                          <Label htmlFor="taxable">Charge tax on this product</Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Inventory Management
                      </CardTitle>
                      <CardDescription>Track and manage product inventory</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="trackInventory" />
                        <Label htmlFor="trackInventory">Track quantity</Label>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity</Label>
                          <Input id="quantity" type="number" placeholder="100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lowStock">Low stock threshold</Label>
                          <Input id="lowStock" type="number" placeholder="10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="stockStatus">Stock Status</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="in-stock">In Stock</SelectItem>
                            <SelectItem value="low-stock">Low Stock</SelectItem>
                            <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                            <SelectItem value="discontinued">Discontinued</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="allowBackorders" />
                        <Label htmlFor="allowBackorders">Allow customers to purchase when out of stock</Label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="media" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <ImageIcon className="h-5 w-5 mr-2" />
                        Product Images
                      </CardTitle>
                      <CardDescription>Upload and manage product images</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-semibold mb-2">Upload Product Images</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Drag and drop your images here, or click to browse
                        </p>
                        <Button variant="outline">
                          Choose Files
                        </Button>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="border rounded-lg p-4 text-center">
                          <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">Main Image</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Set as Primary
                          </Button>
                        </div>
                        <div className="border rounded-lg p-4 text-center">
                          <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                            <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">Additional Image</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center flex items-center justify-center">
                          <Plus className="h-8 w-8 text-muted-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="shipping" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Truck className="h-5 w-5 mr-2" />
                        Shipping Information
                      </CardTitle>
                      <CardDescription>Configure shipping settings for this product</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Weight (lbs)</Label>
                          <Input id="weight" type="number" placeholder="1.5" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dimensions">Dimensions (L x W x H)</Label>
                          <Input id="dimensions" placeholder="10 x 8 x 3 inches" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="requiresShipping" />
                        <Label htmlFor="requiresShipping">This is a physical product</Label>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shippingClass">Shipping Class</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select shipping class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="express">Express</SelectItem>
                            <SelectItem value="overnight">Overnight</SelectItem>
                            <SelectItem value="free">Free Shipping</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Product Variants</CardTitle>
                      <CardDescription>Add variants like size, color, or style</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hasVariants" />
                        <Label htmlFor="hasVariants">This product has multiple options, like different sizes or colors</Label>
                      </div>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Label>Variant Option</Label>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="variantName">Option Name</Label>
                              <Input id="variantName" placeholder="Size, Color, Style" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="variantValues">Option Values</Label>
                              <Input id="variantValues" placeholder="Small, Medium, Large" />
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Another Option
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Visible</SelectItem>
                        <SelectItem value="hidden">Hidden</SelectItem>
                        <SelectItem value="password">Password protected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="publishDate">Publish Date</Label>
                    <Input id="publishDate" type="datetime-local" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="featured">Featured Product</Label>
                      <p className="text-sm text-muted-foreground">
                        Display in featured sections
                      </p>
                    </div>
                    <Switch id="featured" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="downloadable">Digital Product</Label>
                      <p className="text-sm text-muted-foreground">
                        Downloadable/virtual product
                      </p>
                    </div>
                    <Switch id="downloadable" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reviews">Enable Reviews</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow customer reviews
                      </p>
                    </div>
                    <Switch id="reviews" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO & Meta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input id="metaTitle" placeholder="SEO title for search engines" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea 
                      id="metaDescription" 
                      placeholder="SEO description for search engines..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urlSlug">URL Slug</Label>
                    <Input id="urlSlug" placeholder="wireless-bluetooth-headphones" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vendor">Vendor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vendor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="sony">Sony</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="collections">Collections</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Add to collection" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bestsellers">Best Sellers</SelectItem>
                        <SelectItem value="new">New Arrivals</SelectItem>
                        <SelectItem value="sale">On Sale</SelectItem>
                        <SelectItem value="featured">Featured</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 