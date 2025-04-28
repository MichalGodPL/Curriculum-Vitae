// Enhanced PDF Download Functionality
export const setupPdfDownload = function() {
    preparePdfVersion();
    
    // Give the browser a moment to apply print styles
    setTimeout(() => {
        window.print();
    }, 300);
};

export const preparePdfVersion = function() {
    const pdfContent = document.getElementById('pdf-version');
    if (!pdfContent) return;
    
    // Create a clean, simple version of the CV for single-page PDF with minimal styling
    const compactCV = document.createElement('div');
    compactCV.className = 'pdf-content';
    compactCV.style.fontFamily = 'Arial, sans-serif';
    compactCV.style.maxHeight = '297mm'; // A4 height
    compactCV.style.width = '210mm'; // A4 width
    compactCV.style.padding = '0';
    compactCV.style.margin = '0 auto';
    compactCV.style.overflow = 'hidden';
    compactCV.style.position = 'relative';
    compactCV.style.backgroundColor = 'white';
    compactCV.style.color = 'black';
    
    // Simple header with no background color
    const header = document.createElement('div');
    header.style.padding = '6px 15px';
    header.style.color = 'black';
    header.style.borderBottom = '1px solid #ddd';
    
    header.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="font-size: 14pt; font-weight: 600; margin: 0; color: black;">Michał Szymański</h1>
                <p style="font-size: 9pt; margin: 1px 0 0 0; color: black; font-weight: 400;">AGH UST Student</p>
            </div>
            <div style="text-align: right; font-size: 8pt; color: black;">
                <div style="margin-bottom: 1px;"><i class="fas fa-envelope" style="width: 12px;"></i> mszymanski@student.agh.edu.pl</div>
                <div style="margin-bottom: 1px;"><i class="fas fa-phone" style="width: 12px;"></i> +48 731 835 644</div>
                <div style="margin-bottom: 1px;"><i class="fas fa-map-marker-alt" style="width: 12px;"></i> Kraków, Poland</div>
                <div style="margin-bottom: 1px;"><i class="fab fa-github" style="width: 12px;"></i> github.com/MichalGodPL</div>
                <div><i class="fab fa-linkedin" style="width: 12px;"></i> linkedin.com/in/Michal-Szymanski-Student</div>
            </div>
        </div>
    `;
    
    compactCV.appendChild(header);
    
    // Create main grid layout
    const mainContent = document.createElement('div');
    mainContent.style.display = 'grid';
    mainContent.style.gridTemplateColumns = '30% 70%';
    mainContent.style.gap = '12px';
    mainContent.style.padding = '12px';
    compactCV.appendChild(mainContent);
    
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');
    
    mainContent.appendChild(leftColumn);
    mainContent.appendChild(rightColumn);
    
    // LEFT COLUMN CONTENT - Simple and clean design
    
    // Education Section - No colors, simple borders
    const educationHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Education
            </h2>
            <div style="padding-left: 2px;">
                <div style="margin-bottom: 4px;">
                    <div style="font-weight: 600; font-size: 9pt; color: black;">Bachelor's Degree in Computer Science in Engineering</div>
                    <div style="font-size: 8pt; color: black; font-weight: 500;">AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY, KRAKÓW</div>
                    <div style="font-size: 8pt; color: black; margin: 1px 0;">2022 - Present</div>
                    <div style="font-size: 8pt; color: black; line-height: 1.2; margin-top: 3px;">
                        Currently a 3rd year student pursuing a comprehensive program covering software development, 
                        algorithms, and data structures with a focus on practical applications.
                    </div>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += educationHTML;
    
    // Languages Section - Simple text list without bars
    const languagesHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Languages
            </h2>
            <div style="padding-left: 2px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-size: 9pt; color: black;">Polish</span>
                    <span style="font-size: 9pt; color: black;">Native</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-size: 9pt; color: black;">English</span>
                    <span style="font-size: 9pt; color: black;">B2+</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="font-size: 9pt; color: black;">German</span>
                    <span style="font-size: 9pt; color: black;">A2</span>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += languagesHTML;
    
    // Certificates Section - Clean and simple bullets
    const certificatesHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Certificates
            </h2>
            <div style="padding-left: 2px; font-size: 8pt;">
                <div style="display: flex; margin-bottom: 3px; align-items: center;">
                    <span style="color: black; margin-right: 4px; font-size: 9pt;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Building AI Powered Chatbots</div>
                        <div style="color: black; font-size: 8pt;">IBM (2024)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 3px; align-items: center;">
                    <span style="color: black; margin-right: 4px; font-size: 9pt;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Introduction to Packet Tracer</div>
                        <div style="color: black; font-size: 8pt;">Cisco (2024)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 3px; align-items: center;">
                    <span style="color: black; margin-right: 4px; font-size: 9pt;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">HTML and CSS in Depth</div>
                        <div style="color: black; font-size: 8pt;">Meta (2023)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 3px; align-items: center;">
                    <span style="color: black; margin-right: 4px; font-size: 9pt;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">React Basics</div>
                        <div style="color: black; font-size: 8pt;">Meta (2023)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 3px; align-items: center;">
                    <span style="color: black; margin-right: 4px; font-size: 9pt;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Artificial Intelligence Fundamentals</div>
                        <div style="color: black; font-size: 8pt;">IBM (2023)</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += certificatesHTML;
    
    // Interests Section - Simple comma-separated list
    const interestsHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Interests
            </h2>
            <div style="padding-left: 2px; font-size: 9pt; color: black;">
                Mobile Development, History, Machine Learning, Geography, Programming, Biology
            </div>
        </div>
    `;
    leftColumn.innerHTML += interestsHTML;
    
    // RIGHT COLUMN CONTENT - Simple and clean design
    
    // Skills Section - Simple lists without fancy styling
    const skillsHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Skills
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
                <!-- Programming Languages -->
                <div>
                    <h3 style="font-size: 10pt; font-weight: 600; color: black; margin: 0 0 4px 0;">Programming Languages</h3>
                    <div style="font-size: 9pt; color: black;">
                        Java, JavaScript, Python, C, C++, Kotlin, PHP
                    </div>
                </div>
                
                <!-- Web Development -->
                <div>
                    <h3 style="font-size: 10pt; font-weight: 600; color: black; margin: 0 0 4px 0;">Web Development</h3>
                    <div style="font-size: 9pt; color: black;">
                        HTML, CSS, React, Node.js, Bootstrap, Tailwind CSS
                    </div>
                </div>
                
                <!-- Game Development -->
                <div>
                    <h3 style="font-size: 10pt; font-weight: 600; color: black; margin: 0 0 4px 0;">Game Development</h3>
                    <div style="font-size: 9pt; color: black;">
                        Unreal Engine 5, Blueprints, Unity, Game Design
                    </div>
                </div>
                
                <!-- AI & ML -->
                <div>
                    <h3 style="font-size: 10pt; font-weight: 600; color: black; margin: 0 0 4px 0;">AI & ML</h3>
                    <div style="font-size: 9pt; color: black;">
                        PyTorch, TensorFlow, AI-Based Tools, Data Analysis
                    </div>
                </div>
            </div>
            
            <!-- Soft Skills in simple layout -->
            <div style="margin-top: 6px;">
                <h3 style="font-size: 10pt; font-weight: 600; color: black; margin: 0 0 4px 0;">Soft Skills</h3>
                <div style="font-size: 9pt; color: black;">
                    Fast Learning, Teamwork, Communication, Problem Solving, Creativity, Diligence, Adaptability, Time Management, Critical Thinking
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += skillsHTML;
    
    // Experience Section - Clean and simple
    const experienceHTML = `
        <div style="margin-bottom: 16px;">
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Experience
            </h2>
            
            <div>
                <!-- Mathematics Tutor -->
                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 10pt; color: black;">Mathematics Tutor</div>
                        <div style="font-size: 9pt; color: black; font-weight: 400;">Sept. 2023 - Feb. 2024</div>
                    </div>
                    <div style="font-size: 9pt; color: black; font-style: italic; margin-bottom: 2px;">GoStudent, Kraków</div>
                    <div style="font-size: 9pt; color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Provided personalized mathematics tutoring to high school students through the GoStudent E-Learning Platform. 
                        Adapted teaching methods to individual student needs, helping them improve problem solving skills.
                    </div>
                </div>
                
                <!-- Code Industry -->
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 10pt; color: black;">Member, Game Designer, Team Leader</div>
                        <div style="font-size: 9pt; color: black; font-weight: 400;">April 2023 - Present</div>
                    </div>
                    <div style="font-size: 9pt; color: black; font-style: italic; margin-bottom: 2px;">AGH Code Industry Student Research Group, Kraków</div>
                    <div style="font-size: 9pt; color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Active member focused on game development. Design game mechanics, develop programming solutions, 
                        and lead project teams to create innovative gaming experiences using industry-standard tools.
                    </div>
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += experienceHTML;
    
    // Projects Section - Simple list layout
    const projectsHTML = `
        <div>
            <h2 style="font-size: 12pt; color: black; margin: 0 0 6px 0; padding-bottom: 3px; border-bottom: 1px solid #ddd;">
                Projects
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <!-- Project 1 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">Heart Attack Risk Detector</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        AI-powered app predicting heart attack risk with PyTorch model and intuitive interface.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: Python, PyTorch</div>
                </div>
                
                <!-- Project 2 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">Database Management Interface</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Web app with interface for database operations through intuitive UI.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: PHP, SQL</div>
                </div>
                
                <!-- Project 3 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">CPM Logistics Calculator</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        App calculating Critical Path Method with interactive charts for project planning.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: Python, Data Visualization</div>
                </div>
                
                <!-- Project 4 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">Android Paint App</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Mobile painting app for Android with drawing tools and color selection.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: Kotlin, Android SDK</div>
                </div>
                
                <!-- Project 5 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">React Calculator</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Interactive calculator with responsive design and comprehensive functions.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: React, JavaScript</div>
                </div>
                
                <!-- Project 6 -->
                <div style="padding: 6px 0; font-size: 9pt;">
                    <div style="font-weight: 600; font-size: 10pt; color: black; margin-bottom: 2px;">Logistics Intermediary Calculator</div>
                    <div style="color: black; line-height: 1.2; margin-bottom: 3px; text-align: justify;">
                        Tool calculating logistics intermediary method with detailed visualizations.
                    </div>
                    <div style="font-size: 8pt; color: #666;">Technologies: Python, Data Analysis</div>
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += projectsHTML;
    
    // Add a brief profile statement at the bottom
    const profileHTML = `
        <div style="margin-top: 10px; padding: 8px 0; border-top: 1px solid #ddd;">
            <p style="font-size: 9pt; color: black; line-height: 1.3; margin: 0; text-align: justify;">
                <strong>Profile:</strong> Motivated Computer Science in Engineering student at AGH University of Science and Technology. I approach projects with professionalism and a strong passion for technology, excelling in teamwork, communication, and problem-solving.
            </p>
        </div>
    `;
    rightColumn.innerHTML += profileHTML;
    
    // Clear the PDF container and add the new content
    pdfContent.innerHTML = '';
    pdfContent.appendChild(compactCV);
};
