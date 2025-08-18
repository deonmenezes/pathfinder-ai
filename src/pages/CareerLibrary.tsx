import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const careerCategories = [
  {
    id: 'education',
    title: 'Education',
    icon: '🎓',
    careers: [
      'Elementary School Teacher', 'High School Teacher', 'University Professor', 'Educational Administrator',
      'School Counselor', 'Curriculum Developer', 'Educational Psychologist', 'Special Education Teacher',
      'Adult Education Instructor', 'Corporate Trainer', 'Online Course Creator', 'Educational Technology Specialist',
      'Library Science Professional', 'Academic Research Coordinator', 'Student Affairs Administrator', 'Admissions Counselor',
      'Educational Policy Analyst', 'Instructional Designer', 'Education Consultant', 'Preschool Teacher',
      'Substitute Teacher', 'Tutor', 'Academic Advisor', 'Education Program Director',
      'Learning and Development Specialist', 'Educational Software Developer', 'School Principal', 'Vice Principal',
      'Department Head', 'Education Writer', 'Assessment Specialist', 'Educational Therapist',
      'Distance Learning Coordinator', 'International Education Coordinator', 'Educational Grant Writer', 'Education Data Analyst'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: '🛒',
    careers: [
      'E-commerce Manager', 'Digital Marketing Specialist', 'Online Store Owner', 'E-commerce Analyst',
      'Product Manager', 'Customer Experience Manager', 'Supply Chain Coordinator', 'Inventory Manager',
      'Digital Content Creator', 'E-commerce Developer', 'Conversion Rate Optimizer', 'Email Marketing Specialist',
      'Social Media Manager', 'Affiliate Marketing Manager', 'Marketplace Specialist', 'E-commerce Consultant',
      'Online Payment Systems Specialist', 'Logistics Coordinator', 'Customer Service Representative', 'SEO Specialist',
      'PPC Campaign Manager', 'E-commerce Designer', 'Mobile Commerce Developer', 'Fraud Prevention Specialist',
      'Returns and Refunds Coordinator', 'Product Information Manager', 'Vendor Relations Manager', 'Multi-channel Manager',
      'E-commerce Trainer', 'Online Merchandiser', 'Digital Asset Manager', 'E-commerce Photographer',
      'Pricing Analyst', 'Competition Research Analyst', 'Customer Retention Specialist', 'E-commerce Operations Manager'
    ]
  },
  {
    id: 'cultural-heritage',
    title: 'Cultural Heritage Management',
    icon: '🏛️',
    careers: [
      'Museum Curator', 'Heritage Conservation Specialist', 'Archaeological Project Manager', 'Cultural Resource Manager',
      'Historical Preservation Officer', 'Museum Education Coordinator', 'Archives Manager', 'Cultural Heritage Consultant',
      'Historic Site Manager', 'Cultural Tourism Developer', 'Artifact Conservator', 'Digital Heritage Specialist',
      'Community Heritage Coordinator', 'Cultural Policy Analyst', 'Heritage Documentation Specialist', 'Museum Collections Manager',
      'Cultural Heritage Lawyer', 'Indigenous Heritage Advisor', 'Heritage Impact Assessment Specialist', 'Cultural Center Director',
      'Heritage Interpretation Specialist', 'Oral History Coordinator', 'Cultural Heritage Photographer', 'Heritage Site Guide',
      'Cultural Heritage Grant Writer', 'Museum Technician', 'Heritage Digitization Specialist', 'Cultural Heritage Researcher',
      'Heritage Planning Consultant', 'Cultural Heritage Educator', 'Museum Security Specialist', 'Heritage Marketing Coordinator',
      'Cultural Heritage Database Manager', 'Heritage Tourism Guide', 'Cultural Heritage Project Coordinator', 'Museum Volunteer Coordinator'
    ]
  },
  {
    id: 'arts-design',
    title: 'Arts and Design',
    icon: '🎨',
    careers: [
      'Graphic Designer', 'Web Designer', 'UX/UI Designer', 'Interior Designer',
      'Fashion Designer', 'Industrial Designer', 'Fine Artist', 'Illustrator',
      'Photographer', 'Video Editor', 'Animation Designer', 'Game Designer',
      'Art Director', 'Creative Director', 'Brand Designer', 'Package Designer',
      'Set Designer', 'Costume Designer', 'Jewelry Designer', 'Textile Designer',
      'Environmental Designer', 'Exhibition Designer', 'Sound Designer', 'Motion Graphics Designer',
      'Character Designer', 'Concept Artist', 'Digital Artist', 'Art Teacher',
      'Art Therapist', 'Museum Designer', 'Book Designer', 'Logo Designer',
      'Product Designer', 'Furniture Designer', 'Landscape Designer', 'Lighting Designer'
    ]
  },
  {
    id: 'agriculture',
    title: 'Agriculture and Natural Resources',
    icon: '🌾',
    careers: [
      'Agricultural Engineer', 'Farm Manager', 'Soil Scientist', 'Crop Consultant',
      'Agricultural Inspector', 'Livestock Specialist', 'Forestry Technician', 'Environmental Scientist',
      'Agricultural Economist', 'Food Safety Inspector', 'Plant Breeder', 'Agricultural Research Scientist',
      'Extension Agent', 'Irrigation Specialist', 'Precision Agriculture Specialist', 'Agricultural Sales Representative',
      'Farm Equipment Technician', 'Agricultural Loan Officer', 'Organic Farming Consultant', 'Sustainable Agriculture Advisor',
      'Agricultural Photographer', 'Farm Insurance Agent', 'Agricultural Writer', 'Seed Sales Representative',
      'Agricultural Software Developer', 'Farm Safety Coordinator', 'Agricultural Pilot', 'Greenhouse Manager',
      'Agricultural Quality Control Specialist', 'Farm Accountant', 'Agricultural Marketing Specialist', 'Rural Development Specialist',
      'Agricultural Policy Analyst', 'Farm Equipment Sales Representative', 'Agricultural Data Analyst', 'Aquaculture Specialist'
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics and Automation',
    icon: '🤖',
    careers: [
      'Robotics Engineer', 'Automation Engineer', 'Control Systems Engineer', 'Robotics Software Developer',
      'Industrial Automation Specialist', 'Robotics Technician', 'AI Engineer', 'Machine Learning Engineer',
      'Robotics Researcher', 'Automation Systems Designer', 'Robotics Project Manager', 'PLC Programmer',
      'SCADA Systems Engineer', 'Robotics Sales Engineer', 'Automation Consultant', 'Robotics Maintenance Technician',
      'Computer Vision Engineer', 'Robotics Test Engineer', 'Automation Integration Specialist', 'Robotics Product Manager',
      'Industrial IoT Engineer', 'Robotics Safety Engineer', 'Autonomous Vehicle Engineer', 'Drone Technology Specialist',
      'Robotics Training Specialist', 'Automation Project Coordinator', 'Robotics Hardware Engineer', 'Mechatronics Engineer',
      'Robotics Quality Assurance Engineer', 'Automation Business Analyst', 'Robotics Field Service Engineer', 'Smart Manufacturing Engineer',
      'Robotics Documentation Specialist', 'Automation Systems Analyst', 'Robotics Customer Support Engineer', 'Industrial Robotics Programmer'
    ]
  },
  {
    id: 'transportation',
    title: 'Transportation and Logistics',
    icon: '🚛',
    careers: [
      'Logistics Coordinator', 'Supply Chain Manager', 'Transportation Planner', 'Freight Broker',
      'Warehouse Manager', 'Distribution Center Supervisor', 'Fleet Manager', 'Shipping Coordinator',
      'Customs Broker', 'Import/Export Specialist', 'Route Optimization Analyst', 'Inventory Control Specialist',
      'Transportation Safety Inspector', 'Logistics Analyst', 'Port Operations Manager', 'Air Traffic Controller',
      'Maritime Operations Coordinator', 'Railroad Conductor', 'Truck Driver', 'Delivery Driver',
      'Logistics Software Developer', 'Supply Chain Analyst', 'Procurement Specialist', 'Vendor Management Coordinator',
      'Reverse Logistics Specialist', 'Cross-docking Coordinator', 'Transportation Cost Analyst', 'Freight Auditor',
      'Logistics Customer Service Representative', 'Materials Handling Engineer', 'Transportation Security Officer', 'Logistics Training Coordinator',
      'Supply Chain Risk Manager', 'Transportation Technology Specialist', 'Logistics Project Manager', 'Third-Party Logistics Provider'
    ]
  },
  {
    id: 'business-finance',
    title: 'Business and Finance',
    icon: '💼',
    careers: [
      'Financial Analyst', 'Investment Banker', 'Accountant', 'Financial Planner',
      'Business Analyst', 'Management Consultant', 'Corporate Finance Specialist', 'Risk Manager',
      'Auditor', 'Tax Consultant', 'Portfolio Manager', 'Credit Analyst',
      'Budget Analyst', 'Financial Controller', 'Chief Financial Officer', 'Bookkeeper',
      'Treasury Analyst', 'Compliance Officer', 'Financial Advisor', 'Insurance Agent',
      'Real Estate Analyst', 'Mergers and Acquisitions Specialist', 'Economic Analyst', 'Financial Software Developer',
      'Venture Capital Analyst', 'Private Equity Associate', 'Financial Trader', 'Forex Analyst',
      'Banking Relationship Manager', 'Loan Officer', 'Financial Data Analyst', 'Business Development Manager',
      'Strategy Consultant', 'Operations Manager', 'Project Finance Specialist', 'Financial Risk Analyst'
    ]
  },
  {
    id: 'finance-economics',
    title: 'Finance and Economics',
    icon: '📈',
    careers: [
      'Economist', 'Econometrician', 'Market Research Analyst', 'Economic Policy Advisor',
      'Financial Markets Analyst', 'Monetary Policy Specialist', 'Development Economist', 'Labor Economist',
      'Environmental Economist', 'Health Economist', 'Economic Forecaster', 'International Trade Specialist',
      'Public Finance Economist', 'Agricultural Economist', 'Urban Economics Specialist', 'Economic Consultant',
      'Economic Research Assistant', 'Statistical Analyst', 'Economic Data Analyst', 'Macroeconomic Analyst',
      'Microeconomic Analyst', 'Behavioral Economist', 'Economic Model Developer', 'Economic Impact Analyst',
      'Financial Risk Economist', 'Economic Survey Researcher', 'Economic Policy Researcher', 'Economic Intelligence Analyst',
      'Economic Development Specialist', 'Regional Economic Planner', 'Economic Journalism Specialist', 'Economic Education Coordinator',
      'Economic Database Manager', 'Economic Software Developer', 'Quantitative Economic Analyst', 'Economic Regulatory Analyst'
    ]
  },
  {
    id: 'business-management',
    title: 'Business and Management',
    icon: '👔',
    careers: [
      'General Manager', 'Operations Manager', 'Project Manager', 'Business Development Manager',
      'Strategy Manager', 'Change Management Consultant', 'Process Improvement Specialist', 'Quality Assurance Manager',
      'Organizational Development Specialist', 'Business Operations Analyst', 'Management Trainee', 'Executive Assistant',
      'Team Leader', 'Department Manager', 'Regional Manager', 'Branch Manager',
      'Product Manager', 'Program Manager', 'Portfolio Manager', 'Relationship Manager',
      'Business Process Analyst', 'Management Consultant', 'Corporate Strategy Analyst', 'Performance Management Specialist',
      'Business Intelligence Analyst', 'Knowledge Management Specialist', 'Continuous Improvement Manager', 'Lean Six Sigma Specialist',
      'Strategic Planning Manager', 'Business Transformation Manager', 'Innovation Manager', 'Partnership Manager',
      'Vendor Management Specialist', 'Contract Manager', 'Facilities Manager', 'Administrative Manager'
    ]
  },
  {
    id: 'media-communications',
    title: 'Media and Communications',
    icon: '📺',
    careers: [
      'Journalist', 'Public Relations Specialist', 'Marketing Communications Manager', 'Social Media Manager',
      'Content Creator', 'Video Producer', 'Radio Host', 'Television Producer',
      'Communications Director', 'Media Relations Specialist', 'Corporate Communications Manager', 'Digital Content Strategist',
      'Broadcast Journalist', 'News Reporter', 'Editor', 'Copywriter',
      'Creative Writer', 'Technical Writer', 'Grant Writer', 'Communications Coordinator',
      'Media Buyer', 'Advertising Account Executive', 'Brand Communications Specialist', 'Internal Communications Specialist',
      'Crisis Communications Manager', 'Investor Relations Specialist', 'Community Relations Manager', 'Event Communications Coordinator',
      'Podcast Producer', 'Multimedia Specialist', 'Communications Analyst', 'Public Affairs Specialist',
      'Media Research Analyst', 'Communications Trainer', 'Speech Writer', 'Communications Technology Specialist'
    ]
  },
  {
    id: 'gaming',
    title: 'Gaming Industry',
    icon: '🎮',
    careers: [
      'Game Developer', 'Game Designer', 'Game Artist', 'Game Programmer',
      'Level Designer', 'Character Designer', 'Game Tester', 'Quality Assurance Specialist',
      'Game Producer', 'Game Director', 'Narrative Designer', 'Sound Designer',
      'Game Animator', '3D Modeler', 'Texture Artist', 'UI/UX Designer',
      'Game Marketing Manager', 'Community Manager', 'Esports Coordinator', 'Game Streamer',
      'Game Journalist', 'Game Reviewer', 'Localization Specialist', 'Game Monetization Analyst',
      'Technical Artist', 'Game Engine Developer', 'VR/AR Developer', 'Mobile Game Developer',
      'Indie Game Developer', 'Game Publisher', 'Game Distributor', 'Game Event Coordinator',
      'Game Analytics Specialist', 'Player Experience Researcher', 'Game Economy Designer', 'Live Operations Manager'
    ]
  },
  {
    id: 'civil-services',
    title: 'Civil Services',
    icon: '🏛️',
    careers: [
      'Civil Service Officer', 'Government Administrator', 'Policy Analyst', 'Public Affairs Specialist',
      'Municipal Manager', 'City Planner', 'Government Relations Specialist', 'Legislative Aide',
      'Public Health Administrator', 'Environmental Compliance Officer', 'Social Services Coordinator', 'Economic Development Specialist',
      'Public Information Officer', 'Grant Administrator', 'Budget Analyst', 'Human Resources Specialist',
      'Immigration Officer', 'Tax Assessor', 'Building Inspector', 'Fire Inspector',
      'Emergency Management Coordinator', 'Public Safety Dispatcher', 'Court Administrator', 'Records Management Specialist',
      'Public Works Coordinator', 'Transportation Planner', 'Community Development Specialist', 'Public Policy Researcher',
      'Government Auditor', 'Regulatory Affairs Specialist', 'Public Procurement Officer', 'Administrative Law Judge',
      'Government IT Specialist', 'Public Communications Manager', 'Intergovernmental Relations Coordinator', 'Citizen Services Representative'
    ]
  },
  {
    id: 'sports-recreation',
    title: 'Sports and Recreation',
    icon: '⚽',
    careers: [
      'Athletic Coach', 'Personal Trainer', 'Sports Medicine Physician', 'Physical Therapist',
      'Recreation Director', 'Sports Marketing Manager', 'Athletic Director', 'Sports Journalist',
      'Fitness Instructor', 'Sports Psychologist', 'Sports Nutritionist', 'Athletic Trainer',
      'Sports Agent', 'Event Coordinator', 'Facility Manager', 'Youth Sports Coordinator',
      'Sports Broadcaster', 'Sports Photographer', 'Equipment Manager', 'Sports Analyst',
      'Recreation Therapist', 'Outdoor Education Instructor', 'Sports Performance Analyst', 'Strength and Conditioning Coach',
      'Sports Officiating', 'Aquatics Director', 'Camp Director', 'Adventure Guide',
      'Sports Video Analyst', 'Sports Technology Specialist', 'Athletic Academic Advisor', 'Sports Facility Designer',
      'Sports Event Producer', 'Recreation Program Coordinator', 'Sports Equipment Designer', 'Sports Tourism Coordinator'
    ]
  },
  {
    id: 'environmental',
    title: 'Environmental Care',
    icon: '🌱',
    careers: [
      'Environmental Scientist', 'Conservation Biologist', 'Environmental Engineer', 'Sustainability Consultant',
      'Environmental Compliance Specialist', 'Wildlife Biologist', 'Environmental Educator', 'Climate Change Analyst',
      'Environmental Health Specialist', 'Renewable Energy Specialist', 'Environmental Policy Analyst', 'Water Quality Specialist',
      'Air Quality Technician', 'Environmental Remediation Specialist', 'Waste Management Coordinator', 'Environmental Impact Assessor',
      'Ecological Restoration Specialist', 'Environmental Data Analyst', 'Green Building Consultant', 'Environmental Lawyer',
      'Environmental Journalist', 'Park Ranger', 'Environmental Activist', 'Carbon Footprint Analyst',
      'Environmental Monitoring Technician', 'Environmental Research Scientist', 'Environmental Project Manager', 'Habitat Restoration Specialist',
      'Environmental Risk Assessor', 'Environmental Training Coordinator', 'Environmental Technology Developer', 'Environmental Outreach Coordinator',
      'Pollution Control Specialist', 'Environmental Laboratory Technician', 'Environmental Planning Specialist', 'Environmental Compliance Auditor'
    ]
  },
  {
    id: 'animal-care',
    title: 'Animal Care and Farming',
    icon: '🐄',
    careers: [
      'Veterinarian', 'Veterinary Technician', 'Animal Behaviorist', 'Zookeeper',
      'Animal Trainer', 'Pet Groomer', 'Animal Control Officer', 'Wildlife Rehabilitator',
      'Livestock Manager', 'Dairy Farm Manager', 'Poultry Farm Manager', 'Aquaculture Specialist',
      'Animal Nutritionist', 'Breeding Specialist', 'Animal Welfare Inspector', 'Pet Store Manager',
      'Animal Shelter Manager', 'Veterinary Assistant', 'Animal Research Technician', 'Conservation Officer',
      'Animal Physical Therapist', 'Animal Hospital Manager', 'Livestock Inspector', 'Animal Transportation Specialist',
      'Farm Equipment Operator', 'Animal Insurance Specialist', 'Pet Photographer', 'Animal Boarding Facility Manager',
      'Exotic Animal Specialist', 'Animal Sanctuary Coordinator', 'Livestock Auction Coordinator', 'Animal Health Technician',
      'Animal Genetics Specialist', 'Pet Food Developer', 'Animal Therapy Coordinator', 'Farm Safety Inspector'
    ]
  },
  {
    id: 'fashion',
    title: 'Fashion Industry',
    icon: '👗',
    careers: [
      'Fashion Designer', 'Pattern Maker', 'Fashion Stylist', 'Fashion Buyer',
      'Fashion Merchandiser', 'Fashion Photographer', 'Fashion Model', 'Fashion Journalist',
      'Fashion Marketing Manager', 'Fashion Show Producer', 'Costume Designer', 'Fashion Illustrator',
      'Textile Designer', 'Fashion Trend Forecaster', 'Fashion Retail Manager', 'Fashion Brand Manager',
      'Fashion Public Relations Specialist', 'Fashion Consultant', 'Fashion Video Producer', 'Fashion Blogger',
      'Fashion E-commerce Manager', 'Fashion Quality Control Specialist', 'Fashion Production Manager', 'Fashion Sales Representative',
      'Fashion Education Instructor', 'Fashion Museum Curator', 'Fashion Event Coordinator', 'Fashion Technology Developer',
      'Fashion Sustainability Specialist', 'Fashion Supply Chain Manager', 'Fashion Social Media Manager', 'Fashion Fit Model',
      'Fashion Technical Designer', 'Fashion Color Specialist', 'Fashion Accessories Designer', 'Fashion Startup Entrepreneur'
    ]
  },
  {
    id: 'social-services',
    title: 'Social Services and Counselling',
    icon: '🤝',
    careers: [
      'Social Worker', 'Clinical Therapist', 'Marriage and Family Therapist', 'Substance Abuse Counselor',
      'Mental Health Counselor', 'Child and Family Social Worker', 'School Counselor', 'Rehabilitation Counselor',
      'Community Outreach Coordinator', 'Case Manager', 'Program Coordinator', 'Non-profit Administrator',
      'Crisis Intervention Specialist', 'Grief Counselor', 'Career Counselor', 'Victim Advocate',
      'Youth Services Coordinator', 'Senior Services Coordinator', 'Housing Counselor', 'Disability Services Coordinator',
      'Community Development Worker', 'Social Services Director', 'Grant Writer', 'Volunteer Coordinator',
      'Foster Care Coordinator', 'Adoption Specialist', 'Homeless Services Coordinator', 'Refugee Services Coordinator',
      'Behavioral Health Specialist', 'Group Therapy Facilitator', 'Peer Support Specialist', 'Social Work Supervisor',
      'Community Health Worker', 'Social Policy Analyst', 'Social Research Analyst', 'Social Work Educator'
    ]
  },
  {
    id: 'sales-management',
    title: 'Sales and Management',
    icon: '📊',
    careers: [
      'Sales Manager', 'Sales Representative', 'Account Manager', 'Business Development Representative',
      'Sales Director', 'Regional Sales Manager', 'Territory Sales Manager', 'Key Account Manager',
      'Inside Sales Representative', 'Outside Sales Representative', 'Sales Engineer', 'Technical Sales Specialist',
      'Sales Operations Manager', 'Sales Analyst', 'Sales Trainer', 'Sales Coordinator',
      'Customer Success Manager', 'Client Relationship Manager', 'Sales Support Specialist', 'Lead Generation Specialist',
      'Sales Consultant', 'Channel Sales Manager', 'International Sales Manager', 'E-commerce Sales Manager',
      'Retail Sales Manager', 'Pharmaceutical Sales Representative', 'Real Estate Sales Agent', 'Insurance Sales Agent',
      'Software Sales Specialist', 'Sales Process Improvement Specialist', 'Sales Technology Manager', 'Sales Compensation Analyst',
      'Sales Forecasting Analyst', 'Sales Performance Manager', 'Customer Acquisition Specialist', 'Sales Strategy Consultant'
    ]
  },
  {
    id: 'music-entertainment',
    title: 'Music and Entertainment',
    icon: '🎵',
    careers: [
      'Musician', 'Music Producer', 'Audio Engineer', 'Music Composer',
      'Music Teacher', 'Music Therapist', 'Concert Promoter', 'Music Manager',
      'Record Label Executive', 'Music Journalist', 'Sound Technician', 'Music Video Director',
      'Entertainment Lawyer', 'Talent Agent', 'Event Producer', 'Stage Manager',
      'Lighting Designer', 'Choreographer', 'Dance Instructor', 'Theater Director',
      'Actor', 'Voice Actor', 'Radio DJ', 'Podcast Producer',
      'Music Retail Manager', 'Music Streaming Platform Manager', 'Music Marketing Specialist', 'Concert Venue Manager',
      'Music Education Coordinator', 'Music Technology Specialist', 'Music Librarian', 'Music Critic',
      'Entertainment Publicist', 'Casting Director', 'Entertainment Accountant', 'Music Rights Manager'
    ]
  },
  {
    id: 'hospitality-tourism',
    title: 'Hospitality and Tourism',
    icon: '🏨',
    careers: [
      'Hotel Manager', 'Restaurant Manager', 'Travel Agent', 'Tour Guide',
      'Event Planner', 'Concierge', 'Chef', 'Sommelier',
      'Front Desk Manager', 'Housekeeping Manager', 'Food and Beverage Manager', 'Catering Manager',
      'Tourism Marketing Manager', 'Destination Manager', 'Resort Manager', 'Cruise Director',
      'Wedding Planner', 'Conference Coordinator', 'Guest Relations Manager', 'Revenue Manager',
      'Travel Writer', 'Adventure Tourism Guide', 'Eco-Tourism Specialist', 'Cultural Tourism Coordinator',
      'Hospitality Trainer', 'Hotel Sales Manager', 'Restaurant Consultant', 'Tourism Development Specialist',
      'Hospitality Technology Manager', 'Customer Service Manager', 'Spa Manager', 'Casino Manager',
      'Transportation Coordinator', 'Tourism Policy Analyst', 'Hospitality Interior Designer', 'Tourism Research Analyst'
    ]
  },
  {
    id: 'food-culinary',
    title: 'Food and Culinary Art',
    icon: '👨‍🍳',
    careers: [
      'Executive Chef', 'Sous Chef', 'Pastry Chef', 'Line Cook',
      'Food Critic', 'Food Photographer', 'Food Stylist', 'Restaurant Owner',
      'Catering Manager', 'Menu Developer', 'Food Safety Inspector', 'Nutritionist',
      'Food Scientist', 'Culinary Instructor', 'Private Chef', 'Food Writer',
      'Bakery Manager', 'Wine Sommelier', 'Bartender', 'Food Service Manager',
      'Recipe Developer', 'Food Product Developer', 'Culinary Consultant', 'Food Truck Owner',
      'Corporate Chef', 'Banquet Manager', 'Food and Beverage Director', 'Culinary Arts Teacher',
      'Food Blogger', 'Cookbook Author', 'Food Network Producer', 'Restaurant Consultant',
      'Food Distribution Manager', 'Culinary Equipment Sales Representative', 'Food Marketing Specialist', 'Culinary Event Coordinator'
    ]
  },
  {
    id: 'sales-marketing',
    title: 'Sales and Marketing',
    icon: '📈',
    careers: [
      'Marketing Manager', 'Digital Marketing Specialist', 'SEO Specialist', 'Content Marketing Manager',
      'Brand Manager', 'Product Marketing Manager', 'Market Research Analyst', 'Advertising Manager',
      'Public Relations Manager', 'Social Media Specialist', 'Email Marketing Specialist', 'Marketing Analyst',
      'Campaign Manager', 'Marketing Coordinator', 'Marketing Director', 'Creative Director',
      'Copywriter', 'Marketing Automation Specialist', 'Influencer Marketing Manager', 'Event Marketing Manager',
      'Trade Show Coordinator', 'Marketing Communications Manager', 'Brand Ambassador', 'Marketing Consultant',
      'Growth Hacker', 'Conversion Rate Optimizer', 'Marketing Technology Manager', 'Customer Marketing Manager',
      'Partnership Marketing Manager', 'Field Marketing Manager', 'International Marketing Manager', 'Marketing Operations Manager',
      'Marketing Research Director', 'Marketing Strategy Consultant', 'Marketing Data Analyst', 'Marketing Budget Analyst'
    ]
  },
  {
    id: 'politics-law',
    title: 'Politics and Law',
    icon: '⚖️',
    careers: [
      'Lawyer', 'Judge', 'Paralegal', 'Legal Assistant',
      'District Attorney', 'Public Defender', 'Corporate Counsel', 'Legal Consultant',
      'Political Consultant', 'Campaign Manager', 'Legislative Aide', 'Policy Analyst',
      'Lobbyist', 'Political Scientist', 'Election Coordinator', 'Government Relations Specialist',
      'Constitutional Lawyer', 'Criminal Defense Attorney', 'Civil Rights Lawyer', 'Environmental Lawyer',
      'Immigration Lawyer', 'Tax Attorney', 'Patent Attorney', 'Labor Relations Attorney',
      'Compliance Officer', 'Legal Research Analyst', 'Court Reporter', 'Bailiff',
      'Legal Technology Specialist', 'Law Librarian', 'Legal Writer', 'Mediator',
      'Arbitrator', 'Legal Ethics Advisor', 'Law Enforcement Officer', 'Political Campaign Coordinator'
    ]
  },
  {
    id: 'media-performing',
    title: 'Media and Performing Arts',
    icon: '🎭',
    careers: [
      'Actor', 'Director', 'Producer', 'Screenwriter',
      'Cinematographer', 'Film Editor', 'Theater Manager', 'Drama Teacher',
      'Voice Coach', 'Casting Director', 'Talent Agent', 'Entertainment Manager',
      'Stage Designer', 'Costume Designer', 'Makeup Artist', 'Special Effects Artist',
      'Choreographer', 'Dance Teacher', 'Performance Artist', 'Art Therapist',
      'Entertainment Journalist', 'Film Critic', 'Theater Critic', 'Entertainment Photographer',
      'Production Assistant', 'Script Supervisor', 'Location Manager', 'Stunt Coordinator',
      'Animation Director', 'Voice Actor', 'Radio Producer', 'Television Host',
      'Entertainment Marketing Manager', 'Arts Administrator', 'Cultural Events Coordinator', 'Performance Venue Manager'
    ]
  }
];

const CareerLibrary: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Career Library</h1>
            <p className="text-lg text-muted-foreground mb-6">
              See all major career options out there and learn about each one of them.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by name or career..."
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>

          {/* Career Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerCategories.map((category) => (
              <DropdownMenu key={category.id}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-auto p-4 justify-start bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="text-2xl">{category.icon}</div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-sm">{category.title}</h3>
                        <p className="text-xs text-muted-foreground">36 Career Options</p>
                      </div>
                      <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-80 max-h-96 overflow-y-auto bg-popover border shadow-lg"
                  align="start"
                >
                  {category.careers.map((career, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground py-2 px-3"
                    >
                      <span className="text-sm">{career}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerLibrary;