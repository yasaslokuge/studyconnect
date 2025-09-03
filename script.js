// Sample data for service providers
let serviceProviders = [
    {
        id: 1,
        name: "Maria Santos",
        email: "maria.santos@university.edu",
        phone: "+1-555-0123",
        university: "State University",
        category: "cleaning",
        skills: "Professional house cleaning, deep cleaning, office cleaning. 3+ years experience.",
        location: "Downtown Area",
        rating: 4.8,
        packages: [
            { type: "Basic", price: 25, duration: "2 hours", description: "Standard house cleaning" },
            { type: "Standard", price: 40, duration: "3 hours", description: "Deep cleaning with bathroom and kitchen focus" },
            { type: "Premium", price: 60, duration: "4 hours", description: "Complete house deep clean with organization" }
        ],
        customServices: true,
        joinDate: "2024-09-15"
    },
    {
        id: 2,
        name: "Ahmed Hassan",
        email: "ahmed.hassan@university.edu",
        phone: "+1-555-0124",
        university: "Tech University",
        category: "tutoring",
        skills: "Mathematics, Physics, Computer Science tutoring. PhD student with 5+ years teaching experience.",
        location: "University District",
        rating: 4.9,
        packages: [
            { type: "Basic", price: 30, duration: "1 hour", description: "Single subject tutoring session" },
            { type: "Standard", price: 80, duration: "3 hours", description: "Multi-subject session with homework help" },
            { type: "Premium", price: 150, duration: "Week package", description: "5 sessions per week with test preparation" }
        ],
        customServices: true,
        joinDate: "2024-08-20"
    },
    {
        id: 3,
        name: "Lily Chen",
        email: "lily.chen@university.edu",
        phone: "+1-555-0125",
        university: "Design Institute",
        category: "creative",
        skills: "Graphic design, logo creation, social media content, photography. Portfolio available upon request.",
        location: "Arts Quarter",
        rating: 4.7,
        packages: [
            { type: "Basic", price: 50, duration: "2-3 days", description: "Simple logo design or basic graphics" },
            { type: "Standard", price: 120, duration: "1 week", description: "Brand package with multiple designs" },
            { type: "Premium", price: 250, duration: "2 weeks", description: "Complete brand identity with photography" }
        ],
        customServices: true,
        joinDate: "2024-07-10"
    },
    {
        id: 4,
        name: "Carlos Rodriguez",
        email: "carlos.rodriguez@university.edu",
        phone: "+1-555-0126",
        university: "Business College",
        category: "delivery",
        skills: "Reliable delivery service, airport pickup, moving assistance. Own vehicle and clean driving record.",
        location: "Central Area",
        rating: 4.6,
        packages: [
            { type: "Basic", price: 15, duration: "Local delivery", description: "Within 5-mile radius delivery" },
            { type: "Standard", price: 35, duration: "Extended area", description: "Up to 20-mile radius with waiting time" },
            { type: "Premium", price: 60, duration: "Full service", description: "Airport pickup/drop-off with assistance" }
        ],
        customServices: true,
        joinDate: "2024-06-05"
    },
    {
        id: 5,
        name: "Priya Patel",
        email: "priya.patel@university.edu",
        phone: "+1-555-0127",
        university: "Engineering School",
        category: "tech",
        skills: "Computer repair, software installation, website development, tech troubleshooting. CS major with internship experience.",
        location: "Tech Hub",
        rating: 4.8,
        packages: [
            { type: "Basic", price: 40, duration: "1 hour", description: "Basic tech support and troubleshooting" },
            { type: "Standard", price: 80, duration: "2-3 hours", description: "Software installation and system optimization" },
            { type: "Premium", price: 150, duration: "Half day", description: "Complete system setup or website development" }
        ],
        customServices: true,
        joinDate: "2024-05-12"
    },
    {
        id: 6,
        name: "Emma Thompson",
        email: "emma.thompson@university.edu",
        phone: "+1-555-0128",
        university: "Liberal Arts College",
        category: "personal",
        skills: "Pet sitting, dog walking, house sitting, personal shopping. Reliable and caring with excellent references.",
        location: "Residential Area",
        rating: 4.9,
        packages: [
            { type: "Basic", price: 20, duration: "2 hours", description: "Pet feeding and short walk" },
            { type: "Standard", price: 45, duration: "Half day", description: "Extended pet care with playtime" },
            { type: "Premium", price: 80, duration: "Full day", description: "Complete pet and house sitting service" }
        ],
        customServices: true,
        joinDate: "2024-04-18"
    }
];

// Global variables
let currentFilter = 'all';
let currentProvider = null;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial service providers
    displayServiceProviders(serviceProviders);
    
    // Setup smooth scrolling
    setupSmoothScrolling();
});

// Initialize website
function initializeWebsite() {
    // Show home section by default
    showSection('home');
    
    // Setup mobile navigation
    setupMobileNav();
    
    // Setup form validations
    setupFormValidations();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            showSection(target);
        });
    });
    
    // Form submissions
    document.getElementById('register-form').addEventListener('submit', handleRegistration);
    document.getElementById('update-form').addEventListener('submit', handleProfileUpdate);
    document.getElementById('delete-form').addEventListener('submit', handleAccountDeletion);
    document.getElementById('message-form').addEventListener('submit', handleMessageSend);
    
    // Package checkboxes
    document.querySelectorAll('input[type="checkbox"][id$="-package"]').forEach(checkbox => {
        checkbox.addEventListener('change', togglePackageDetails);
    });
    
    // Search functionality
    document.getElementById('service-search').addEventListener('input', handleSearch);
    
    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', handleContactForm);
}

// Mobile navigation setup
function setupMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Show/hide sections
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // Add animation class
        targetSection.classList.add('fade-in-up');
        
        // Update navigation active state
        updateNavActiveState(sectionName);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update navigation active state
function updateNavActiveState(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

// Display service providers
function displayServiceProviders(providers) {
    const container = document.getElementById('service-providers');
    
    if (providers.length === 0) {
        container.innerHTML = '<div class="no-results"><h3>No service providers found</h3><p>Try adjusting your search or filter criteria.</p></div>';
        return;
    }
    
    container.innerHTML = providers.map(provider => `
        <div class="provider-card" onclick="showProviderDetails(${provider.id})">
            <div class="provider-header">
                <div class="provider-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="provider-info">
                    <h3>${provider.name}</h3>
                    <div class="provider-category">${getCategoryDisplayName(provider.category)}</div>
                    <div class="provider-rating">
                        ${generateStarRating(provider.rating)} (${provider.rating})
                    </div>
                </div>
            </div>
            <div class="provider-skills">${provider.skills}</div>
            <div class="provider-packages">
                ${provider.packages.map(pkg => `<span class="package-tag">${pkg.type}: $${pkg.price}</span>`).join('')}
                ${provider.customServices ? '<span class="package-tag">Custom Available</span>' : ''}
            </div>
            <div class="provider-actions">
                <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); showProviderDetails(${provider.id})">View Details</button>
                <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); openMessageModal(${provider.id})">Message</button>
            </div>
        </div>
    `).join('');
}

// Filter services by category
function filterServices(category) {
    currentFilter = category;
    const filteredProviders = serviceProviders.filter(provider => provider.category === category);
    displayServiceProviders(filteredProviders);
    
    // Scroll to results
    document.getElementById('service-providers').scrollIntoView({ behavior: 'smooth' });
}

// Search services
function searchServices() {
    handleSearch();
}

function handleSearch() {
    const searchTerm = document.getElementById('service-search').value.toLowerCase();
    
    let filteredProviders = serviceProviders;
    
    if (searchTerm) {
        filteredProviders = serviceProviders.filter(provider => 
            provider.name.toLowerCase().includes(searchTerm) ||
            provider.skills.toLowerCase().includes(searchTerm) ||
            provider.category.toLowerCase().includes(searchTerm) ||
            getCategoryDisplayName(provider.category).toLowerCase().includes(searchTerm)
        );
    }
    
    if (currentFilter !== 'all') {
        filteredProviders = filteredProviders.filter(provider => provider.category === currentFilter);
    }
    
    displayServiceProviders(filteredProviders);
}

// Get category display name
function getCategoryDisplayName(category) {
    const categoryNames = {
        'cleaning': 'Cleaning Services',
        'tutoring': 'Tutoring',
        'delivery': 'Delivery & Transport',
        'tech': 'Tech Support',
        'personal': 'Personal Services',
        'creative': 'Creative Services'
    };
    return categoryNames[category] || category;
}

// Generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Show provider details in modal
function showProviderDetails(providerId) {
    const provider = serviceProviders.find(p => p.id === providerId);
    if (!provider) return;
    
    currentProvider = provider;
    
    const modal = document.getElementById('provider-modal');
    const detailsContainer = document.getElementById('provider-details');
    
    detailsContainer.innerHTML = `
        <div class="provider-details">
            <h2>${provider.name}</h2>
            <div class="provider-meta">
                <div class="provider-meta-item">
                    <strong>Category</strong>
                    <span>${getCategoryDisplayName(provider.category)}</span>
                </div>
                <div class="provider-meta-item">
                    <strong>University</strong>
                    <span>${provider.university}</span>
                </div>
                <div class="provider-meta-item">
                    <strong>Location</strong>
                    <span>${provider.location}</span>
                </div>
                <div class="provider-meta-item">
                    <strong>Rating</strong>
                    <span>${generateStarRating(provider.rating)} (${provider.rating})</span>
                </div>
            </div>
            
            <div class="provider-section">
                <h3>Skills & Experience</h3>
                <p>${provider.skills}</p>
            </div>
            
            <div class="provider-section">
                <h3>Service Packages</h3>
                <div class="package-list">
                    ${provider.packages.map(pkg => `
                        <div class="package-item">
                            <h4>${pkg.type} Package</h4>
                            <div class="package-price">$${pkg.price}</div>
                            <div class="package-description">${pkg.description}</div>
                            <div class="package-duration">Duration: ${pkg.duration}</div>
                        </div>
                    `).join('')}
                    ${provider.customServices ? `
                        <div class="package-item">
                            <h4>Custom Services Available</h4>
                            <div class="package-description">Contact for custom quotes and specialized services</div>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="provider-actions" style="margin-top: 2rem;">
                <button class="btn btn-primary" onclick="openMessageModal(${provider.id})">Send Message</button>
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Open message modal
function openMessageModal(providerId) {
    const provider = serviceProviders.find(p => p.id === providerId);
    if (!provider) return;
    
    currentProvider = provider;
    
    const modal = document.getElementById('message-modal');
    const form = document.getElementById('message-form');
    
    // Pre-fill subject
    const subjectField = document.getElementById('message-subject');
    subjectField.value = `Inquiry about ${getCategoryDisplayName(provider.category)} services`;
    
    modal.style.display = 'block';
    
    // Close provider modal if open
    closeModal();
}

// Close modals
function closeModal() {
    document.getElementById('provider-modal').style.display = 'none';
}

function closeMessageModal() {
    document.getElementById('message-modal').style.display = 'none';
    document.getElementById('message-form').reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const providerModal = document.getElementById('provider-modal');
    const messageModal = document.getElementById('message-modal');
    
    if (event.target === providerModal) {
        closeModal();
    }
    if (event.target === messageModal) {
        closeMessageModal();
    }
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to corresponding button
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabIndex = tabName === 'register-tab' ? 0 : tabName === 'update-tab' ? 1 : 2;
    tabButtons[tabIndex].classList.add('active');
}

// Toggle package details
function togglePackageDetails() {
    // This is handled by CSS :has() selector, but we can add additional logic here if needed
    console.log('Package selection changed');
}

// Form validations
function setupFormValidations() {
    // Add real-time validation for email fields
    const emailFields = document.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
        field.addEventListener('blur', validateEmail);
    });
    
    // Add validation for phone fields
    const phoneFields = document.querySelectorAll('input[type="tel"]');
    phoneFields.forEach(field => {
        field.addEventListener('blur', validatePhone);
    });
}

// Email validation
function validateEmail(event) {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    if (email && !isValid) {
        showFieldError(event.target, 'Please enter a valid email address');
    } else {
        clearFieldError(event.target);
    }
    
    return isValid;
}

// Phone validation
function validatePhone(event) {
    const phone = event.target.value;
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const isValid = phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    
    if (phone && !isValid) {
        showFieldError(event.target, 'Please enter a valid phone number');
    } else {
        clearFieldError(event.target);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc2626';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#dc2626';
}

// Clear field error
function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '#d1d5db';
}

// Handle registration form submission
function handleRegistration(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registering...';
    submitBtn.disabled = true;
    
    // Collect form data
    const formData = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        university: document.getElementById('university').value,
        serviceCategory: document.getElementById('service-category').value,
        skills: document.getElementById('skills').value,
        location: document.getElementById('location').value,
        packages: [],
        customServices: document.getElementById('custom-package').checked
    };
    
    // Collect package data
    const packageTypes = ['basic', 'standard', 'premium'];
    packageTypes.forEach(type => {
        const checkbox = document.getElementById(`${type}-package`);
        if (checkbox.checked) {
            formData.packages.push({
                type: type.charAt(0).toUpperCase() + type.slice(1),
                description: document.getElementById(`${type}-desc`).value,
                price: parseFloat(document.getElementById(`${type}-price`).value) || 0,
                duration: document.getElementById(`${type}-duration`).value
            });
        }
    });
    
    if (document.getElementById('custom-package').checked) {
        formData.customDescription = document.getElementById('custom-desc').value;
    }
    
    // Validate required fields
    if (!validateRegistrationForm(formData)) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Simulate API call
    setTimeout(() => {
        // Create new provider
        const newProvider = {
            id: serviceProviders.length + 1,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            university: formData.university,
            category: formData.serviceCategory,
            skills: formData.skills,
            location: formData.location,
            rating: 0, // New providers start with no rating
            packages: formData.packages,
            customServices: formData.customServices,
            joinDate: new Date().toISOString().split('T')[0]
        };
        
        // Add to providers array
        serviceProviders.push(newProvider);
        
        // Reset form
        event.target.reset();
        
        // Show success message
        showSuccessMessage('Registration successful! Your profile has been created.');
        
        // Refresh provider display
        displayServiceProviders(serviceProviders);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Switch to services section
        setTimeout(() => {
            showSection('services');
        }, 2000);
        
    }, 1500);
}

// Validate registration form
function validateRegistrationForm(formData) {
    const errors = [];
    
    if (!formData.fullName.trim()) errors.push('Full name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.phone.trim()) errors.push('Phone number is required');
    if (!formData.university.trim()) errors.push('University is required');
    if (!formData.serviceCategory) errors.push('Service category is required');
    if (!formData.skills.trim()) errors.push('Skills description is required');
    if (!formData.location.trim()) errors.push('Location is required');
    
    if (formData.packages.length === 0 && !formData.customServices) {
        errors.push('Please select at least one package type or enable custom services');
    }
    
    // Check if provider with this email already exists
    if (serviceProviders.some(p => p.email === formData.email)) {
        errors.push('A provider with this email already exists');
    }
    
    if (errors.length > 0) {
        showErrorMessage(errors.join('\n'));
        return false;
    }
    
    return true;
}

// Load profile for updating
function loadProfile() {
    const email = document.getElementById('update-email').value;
    const provider = serviceProviders.find(p => p.email === email);
    
    if (!provider) {
        showErrorMessage('No profile found with this email address');
        return;
    }
    
    // Show update fields
    const updateFields = document.getElementById('update-fields');
    updateFields.style.display = 'block';
    
    // Populate update form with existing data
    updateFields.innerHTML = `
        <div class="form-row">
            <div class="form-group">
                <label>Full Name *</label>
                <input type="text" id="update-full-name" value="${provider.name}" required>
            </div>
            <div class="form-group">
                <label>Phone Number *</label>
                <input type="tel" id="update-phone" value="${provider.phone}" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>University *</label>
                <input type="text" id="update-university" value="${provider.university}" required>
            </div>
            <div class="form-group">
                <label>Location *</label>
                <input type="text" id="update-location" value="${provider.location}" required>
            </div>
        </div>
        <div class="form-group">
            <label>Service Category *</label>
            <select id="update-service-category" required>
                <option value="">Select a category</option>
                <option value="cleaning" ${provider.category === 'cleaning' ? 'selected' : ''}>Cleaning Services</option>
                <option value="tutoring" ${provider.category === 'tutoring' ? 'selected' : ''}>Tutoring</option>
                <option value="delivery" ${provider.category === 'delivery' ? 'selected' : ''}>Delivery & Transport</option>
                <option value="tech" ${provider.category === 'tech' ? 'selected' : ''}>Tech Support</option>
                <option value="personal" ${provider.category === 'personal' ? 'selected' : ''}>Personal Services</option>
                <option value="creative" ${provider.category === 'creative' ? 'selected' : ''}>Creative Services</option>
            </select>
        </div>
        <div class="form-group">
            <label>Skills & Experience *</label>
            <textarea id="update-skills" rows="4" required>${provider.skills}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Update Profile</button>
    `;
}

// Handle profile update
function handleProfileUpdate(event) {
    event.preventDefault();
    
    const email = document.getElementById('update-email').value;
    const providerIndex = serviceProviders.findIndex(p => p.email === email);
    
    if (providerIndex === -1) {
        showErrorMessage('Profile not found');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Updating...';
    submitBtn.disabled = true;
    
    // Update provider data
    const updatedData = {
        name: document.getElementById('update-full-name').value,
        phone: document.getElementById('update-phone').value,
        university: document.getElementById('update-university').value,
        location: document.getElementById('update-location').value,
        category: document.getElementById('update-service-category').value,
        skills: document.getElementById('update-skills').value
    };
    
    // Simulate API call
    setTimeout(() => {
        // Update the provider
        Object.assign(serviceProviders[providerIndex], updatedData);
        
        // Show success message
        showSuccessMessage('Profile updated successfully!');
        
        // Refresh provider display
        displayServiceProviders(serviceProviders);
        
        // Reset form
        document.getElementById('update-fields').style.display = 'none';
        document.getElementById('update-email').value = '';
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    }, 1000);
}

// Handle account deletion
function handleAccountDeletion(event) {
    event.preventDefault();
    
    const email = document.getElementById('delete-email').value;
    const provider = serviceProviders.find(p => p.email === email);
    
    if (!provider) {
        showErrorMessage('No account found with this email address');
        return;
    }
    
    // Confirm deletion
    if (!confirm(`Are you sure you want to delete the account for ${provider.name}? This action cannot be undone.`)) {
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Deleting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Remove provider from array
        const providerIndex = serviceProviders.findIndex(p => p.email === email);
        serviceProviders.splice(providerIndex, 1);
        
        // Show success message
        showSuccessMessage('Account deleted successfully');
        
        // Refresh provider display
        displayServiceProviders(serviceProviders);
        
        // Reset form
        event.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    }, 1000);
}

// Handle message sending
function handleMessageSend(event) {
    event.preventDefault();
    
    if (!currentProvider) {
        showErrorMessage('No provider selected');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Collect message data
    const messageData = {
        senderName: document.getElementById('sender-name').value,
        senderEmail: document.getElementById('sender-email').value,
        subject: document.getElementById('message-subject').value,
        content: document.getElementById('message-content').value,
        recipientEmail: currentProvider.email,
        recipientName: currentProvider.name
    };
    
    // Simulate email sending
    setTimeout(() => {
        // In a real application, this would send an email to the provider
        console.log('Message would be sent:', messageData);
        
        // Show success message
        showSuccessMessage(`Message sent successfully to ${currentProvider.name}!`);
        
        // Close modal and reset form
        closeMessageModal();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

// Handle contact form
function handleContactForm(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
        event.target.reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
}

// Show success message
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 4000);
}

// Show error message
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc2626;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        white-space: pre-line;
        max-width: 400px;
    `;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #6b7280;
    }
    
    .no-results h3 {
        margin-bottom: 1rem;
        color: #374151;
    }
    
    .provider-section {
        margin-bottom: 2rem;
    }
    
    .provider-section h3 {
        margin-bottom: 1rem;
        color: #1e293b;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // ESC key closes modals
    if (event.key === 'Escape') {
        closeModal();
        closeMessageModal();
    }
    
    // Enter key on provider cards opens details
    if (event.key === 'Enter' && event.target.classList.contains('provider-card')) {
        const providerId = event.target.onclick.toString().match(/showProviderDetails\((\d+)\)/);
        if (providerId) {
            showProviderDetails(parseInt(providerId[1]));
        }
    }
});

// Make provider cards keyboard accessible
document.addEventListener('DOMContentLoaded', function() {
    // Add tabindex to provider cards for keyboard navigation
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const providerCards = document.querySelectorAll('.provider-card');
                providerCards.forEach(card => {
                    card.setAttribute('tabindex', '0');
                    card.setAttribute('role', 'button');
                    card.setAttribute('aria-label', 'View provider details');
                });
            }
        });
    });
    
    observer.observe(document.getElementById('service-providers'), {
        childList: true,
        subtree: true
    });
});

// Lazy loading for provider images (if implemented)
function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce search function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('service-search');
    if (searchInput) {
        searchInput.removeEventListener('input', handleSearch);
        searchInput.addEventListener('input', debouncedSearch);
    }
});

// Analytics and tracking (placeholder)
function trackUserInteraction(action, category, label) {
    // In a real application, you would send this data to analytics service
    console.log('User interaction:', { action, category, label, timestamp: new Date() });
}

// Add click tracking to important elements
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('category-card')) {
        trackUserInteraction('click', 'category', event.target.querySelector('h3').textContent);
    }
    
    if (event.target.classList.contains('provider-card')) {
        trackUserInteraction('click', 'provider', 'view_details');
    }
    
    if (event.target.textContent === 'Send Message') {
        trackUserInteraction('click', 'contact', 'message_provider');
    }
});