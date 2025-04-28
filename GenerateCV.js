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
    
    // Create a clean version of the CV that mimics the website design but fits on a single page
    const compactCV = document.createElement('div');
    compactCV.className = 'pdf-content';
    compactCV.style.fontFamily = 'Inter, sans-serif';
    compactCV.style.maxHeight = '297mm'; // A4 height
    compactCV.style.width = '210mm'; // A4 width
    compactCV.style.padding = '8mm';
    compactCV.style.margin = '0 auto';
    compactCV.style.overflow = 'hidden';
    compactCV.style.position = 'relative';
    compactCV.style.backgroundColor = 'white';
    compactCV.style.color = 'black';
    
    // Header section - smaller, gray, and square-shaped
    const header = document.createElement('div');
    header.style.marginBottom = '6px';
    header.style.padding = '6px 8px';
    header.style.borderRadius = '4px'; // More square-shaped
    header.style.background = '#4b5563'; // Gray background
    header.style.color = 'white';
    
    header.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="font-size: 14pt; font-weight: 700; margin: 0; color: white;">Michał Szymański</h1>
                <p style="font-size: 9pt; margin: 2px 0 0 0; color: white; font-weight: 400;">AGH UST Student</p>
            </div>
            <div style="text-align: right; font-size: 7pt; color: white;">
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
    mainContent.style.gap = '6px';
    mainContent.style.marginTop = '6px';
    compactCV.appendChild(mainContent);
    
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');
    
    mainContent.appendChild(leftColumn);
    mainContent.appendChild(rightColumn);
    
    // LEFT COLUMN CONTENT
    
    // Education Section with card-like styling
    const educationHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Education
            </h2>
            <div>
                <div style="margin-bottom: 2px;">
                    <div style="font-weight: 600; font-size: 8pt; color: black;">Bachelor's Degree in Computer Science in Engineering</div>
                    <div style="font-size: 7pt; color: #3b82f6; font-weight: 500;">2022 - Present</div>
                    <div style="font-size: 7pt; color: #4b5563; margin-bottom: 1px;">AGH UNIVERSITY OF SCIENCE AND TECHNOLOGY, KRAKÓW</div>
                    <div style="font-size: 7pt; color: black; line-height: 1.2;">
                        Currently a 3rd year student pursuing a comprehensive program covering software development, 
                        algorithms, and data structures with a focus on practical applications.
                    </div>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += educationHTML;
    
    // Languages Section - With card styling
    const languagesHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Languages
            </h2>
            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
                    <span style="font-size: 8pt; color: black;">Polish</span>
                    <span style="font-size: 8pt; color: black;">Native</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
                    <span style="font-size: 8pt; color: black;">English</span>
                    <span style="font-size: 8pt; color: black;">B2+</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 1px;">
                    <span style="font-size: 8pt; color: black;">German</span>
                    <span style="font-size: 8pt; color: black;">A2</span>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += languagesHTML;
    
    // Interests Section - Moved ABOVE certificates for better space utilization
    const interestsHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Interests
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 2px;">
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">Mobile Development</span>
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">History</span>
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">Machine Learning</span>
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">Geography</span>
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">Programming</span>
                <span style="font-size: 7pt; color: black; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1px 3px;">Biology</span>
            </div>
        </div>
    `;
    leftColumn.innerHTML += interestsHTML;
    
    // Certificates Section - All the certificates with their dates
    const certificatesHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px; max-height: 110mm; overflow: hidden;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Certifications
            </h2>
            <div style="font-size: 7pt; overflow-y: hidden;">
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Building AI Powered Chatbots Without Programming</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2024-03</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Introduction to Packet Tracer</div>
                        <div style="color: black; font-size: 6pt;">Cisco - 2024-02</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Introduction to Containers w/ Docker, Kubernetes & OpenShift</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2023-12</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Get Started with Python</div>
                        <div style="color: black; font-size: 6pt;">Google - 2023-11</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Python for Data Science, AI & Development</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2023-10</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">HTML and CSS in Depth</div>
                        <div style="color: black; font-size: 6pt;">Meta - 2023-08</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Programming in Python</div>
                        <div style="color: black; font-size: 6pt;">Meta - 2023-08</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Programming with JavaScript</div>
                        <div style="color: black; font-size: 6pt;">Meta - 2023-08</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">React Basics</div>
                        <div style="color: black; font-size: 6pt;">Meta - 2023-08</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Introduction to Front-End Development</div>
                        <div style="color: black; font-size: 6pt;">Meta - 2023-07</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Work Smarter with Microsoft Excel</div>
                        <div style="color: black; font-size: 6pt;">Microsoft - 2023-06</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Artificial Intelligence Fundamentals</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2023-05</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Introduction to Cybersecurity</div>
                        <div style="color: black; font-size: 6pt;">Cisco - 2023-04</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">JavaScript Essentials 1</div>
                        <div style="color: black; font-size: 6pt;">Cisco - 2023-03</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Python 101 for Data Science</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2023-02</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 2px; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Web Development Fundamentals</div>
                        <div style="color: black; font-size: 6pt;">IBM - 2023-01</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 0; align-items: flex-start;">
                    <span style="color: black; margin-right: 2px; font-size: 7pt; line-height: 1.2;">•</span>
                    <div>
                        <div style="font-weight: 500; color: black;">Certyfikat Umiejętności Jutra</div>
                        <div style="color: black; font-size: 6pt;">Google - 2022-11</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    leftColumn.innerHTML += certificatesHTML;
    
    // RIGHT COLUMN CONTENT
    
    // Skills Section - Including all skills from the website
    const skillsHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Skills
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 4px;">
                <!-- Technical Skills -->
                <div>
                    <h3 style="font-size: 8pt; font-weight: 600; color: black; margin: 0 0 2px 0;">Technical Skills</h3>
                    
                    <div style="margin-bottom: 2px;">
                        <div style="font-size: 7pt; font-weight: 500; color: black; margin-bottom: 1px;">Programming Languages:</div>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">Java</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">JavaScript</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">Python</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">C</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">C++</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">Kotlin</span>
                            <span style="border: 1px solid #93c5fd; border-radius: 6px; padding: 0 2px; color: #1d4ed8;">PHP</span>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 2px;">
                        <div style="font-size: 7pt; font-weight: 500; color: black; margin-bottom: 1px;">Web Development:</div>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">HTML</span>
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">CSS</span>
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">React</span>
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">Node.js</span>
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">Bootstrap</span>
                            <span style="border: 1px solid #86efac; border-radius: 6px; padding: 0 2px; color: #15803d;">Tailwind</span>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 2px;">
                        <div style="font-size: 7pt; font-weight: 500; color: black; margin-bottom: 1px;">Game Development:</div>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #d8b4fe; border-radius: 6px; padding: 0 2px; color: #7e22ce;">Unreal Engine 5</span>
                            <span style="border: 1px solid #d8b4fe; border-radius: 6px; padding: 0 2px; color: #7e22ce;">Blueprints</span>
                            <span style="border: 1px solid #d8b4fe; border-radius: 6px; padding: 0 2px; color: #7e22ce;">Unity</span>
                            <span style="border: 1px solid #d8b4fe; border-radius: 6px; padding: 0 2px; color: #7e22ce;">Game Design</span>
                        </div>
                    </div>
                </div>
                
                <!-- Additional Skills -->
                <div>
                    <div style="margin-bottom: 2px;">
                        <h3 style="font-size: 8pt; font-weight: 600; color: black; margin: 0 0 2px 0;">AI & Data</h3>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #fde047; border-radius: 6px; padding: 0 2px; color: #a16207;">PyTorch</span>
                            <span style="border: 1px solid #fde047; border-radius: 6px; padding: 0 2px; color: #a16207;">TensorFlow</span>
                            <span style="border: 1px solid #fde047; border-radius: 6px; padding: 0 2px; color: #a16207;">AI-Based Tools</span>
                            <span style="border: 1px solid #fde047; border-radius: 6px; padding: 0 2px; color: #a16207;">Data Analysis</span>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 2px;">
                        <h3 style="font-size: 8pt; font-weight: 600; color: black; margin: 0 0 2px 0;">Tools & Platforms</h3>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">Git</span>
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">GitHub</span>
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">Linux</span>
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">Bash</span>
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">Docker</span>
                            <span style="border: 1px solid #fca5a5; border-radius: 6px; padding: 0 2px; color: #b91c1c;">MS Office</span>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 2px;">
                        <h3 style="font-size: 8pt; font-weight: 600; color: black; margin: 0 0 2px 0;">Databases & Networks</h3>
                        <div style="font-size: 6pt; color: black; padding-left: 2px; display: flex; flex-wrap: wrap; gap: 1px;">
                            <span style="border: 1px solid #a5b4fc; border-radius: 6px; padding: 0 2px; color: #4338ca;">SQL</span>
                            <span style="border: 1px solid #a5b4fc; border-radius: 6px; padding: 0 2px; color: #4338ca;">MariaDB</span>
                            <span style="border: 1px solid #a5b4fc; border-radius: 6px; padding: 0 2px; color: #4338ca;">Computer Networks</span>
                            <span style="border: 1px solid #a5b4fc; border-radius: 6px; padding: 0 2px; color: #4338ca;">Cybersecurity</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Soft skills -->
            <div>
                <h3 style="font-size: 8pt; font-weight: 600; color: black; margin: 0 0 2px 0;">Soft Skills</h3>
                <div style="font-size: 6pt; color: black; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px;">
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Fast Learning</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Teamwork</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Communication</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Problem Solving</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Creativity</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Diligence</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Adaptability</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Time Management</div>
                    <div><i class="fas fa-check-circle" style="color: #10b981; margin-right: 1px;"></i>Critical Thinking</div>
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += skillsHTML;
    
    // Experience Section - More compact
    const experienceHTML = `
        <div style="margin-bottom: 6px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Experience
            </h2>
            
            <div>
                <!-- Mathematics Tutor -->
                <div style="margin-bottom: 4px; border: 1px solid #e2e8f0; border-radius: 4px; padding: 3px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 8pt; color: black;">Mathematics Tutor</div>
                        <div style="font-size: 7pt; color: #3b82f6; font-weight: 500;">Sept. 2023 - Feb. 2024</div>
                    </div>
                    <div style="font-size: 7pt; color: #4b5563; margin-bottom: 1px;">GoStudent, Kraków</div>
                    <div style="font-size: 6pt; color: black; line-height: 1.2; text-align: justify;">
                        Provided personalized mathematics tutoring to high school students through the GoStudent E-Learning Platform. 
                        Adapted teaching methods to individual student needs, helping them improve problem solving skills.
                    </div>
                </div>
                
                <!-- Code Industry -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 3px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 8pt; color: black;">Member, Game Designer, Team Leader</div>
                        <div style="font-size: 7pt; color: #3b82f6; font-weight: 500;">April 2023 - Present</div>
                    </div>
                    <div style="font-size: 7pt; color: #4b5563; margin-bottom: 1px;">AGH Code Industry Student Research Group, Kraków</div>
                    <div style="font-size: 6pt; color: black; line-height: 1.2; text-align: justify;">
                        Active member focused on game development. Design game mechanics, develop programming solutions, 
                        and lead project teams to create innovative gaming experiences using industry-standard tools.
                    </div>
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += experienceHTML;
    
    // Projects Section - Compact grid with all projects
    const projectsHTML = `
        <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 4px;">
            <h2 style="font-size: 10pt; color: black; margin: 0 0 3px 0; padding-bottom: 2px; border-bottom: 1px solid #e2e8f0; text-transform: uppercase;">
                Projects
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3px;">
                <!-- Project 1 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">Heart Attack Risk Detector</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        AI-powered app predicting heart attack risk with PyTorch model and intuitive interface.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Python</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">PyTorch</span>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">Database Management Interface</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        Web app with interface for database operations through intuitive UI.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">PHP</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">SQL</span>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">CPM Logistics Calculator</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        App calculating Critical Path Method with interactive charts for project planning.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Python</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Data Visualization</span>
                    </div>
                </div>
                
                <!-- Project 4 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">Android Paint App</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        Mobile painting app for Android with drawing tools and color selection.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Kotlin</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Android SDK</span>
                    </div>
                </div>
                
                <!-- Project 5 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">React Calculator</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        Interactive calculator with responsive design and comprehensive functions.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">React</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">JavaScript</span>
                    </div>
                </div>
                
                <!-- Project 6 -->
                <div style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px; font-size: 7pt;">
                    <div style="font-weight: 600; font-size: 7pt; color: black; margin-bottom: 1px;">Logistics Intermediary Calculator</div>
                    <div style="color: black; line-height: 1.1; margin-bottom: 1px; text-align: justify; font-size: 6pt;">
                        Tool calculating logistics intermediary method with detailed visualizations.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 1px;">
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Python</span>
                        <span style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 0 2px; font-size: 6pt;">Data Analysis</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    rightColumn.innerHTML += projectsHTML;
    
    // Clear the PDF container and add the new content
    pdfContent.innerHTML = '';
    pdfContent.appendChild(compactCV);
    
    // Add overflow control to ensure the PDF fits on a single page
    const checkOverflow = function() {
        // If the content is taller than the page height, slightly reduce font sizes
        if (compactCV.offsetHeight > 277) { // A4 height minus margins
            const allElements = compactCV.querySelectorAll('*');
            allElements.forEach(el => {
                if (el.style.fontSize) {
                    const currentSize = parseFloat(el.style.fontSize);
                    const unit = el.style.fontSize.replace(/[\d.]/g, '');
                    el.style.fontSize = (currentSize * 0.98) + unit;
                }
                if (el.style.lineHeight) {
                    const currentHeight = parseFloat(el.style.lineHeight);
                    if (!isNaN(currentHeight)) {
                        el.style.lineHeight = (currentHeight * 0.98);
                    }
                }
                if (el.style.marginBottom) {
                    const currentMargin = parseFloat(el.style.marginBottom);
                    const unit = el.style.marginBottom.replace(/[\d.]/g, '');
                    el.style.marginBottom = (currentMargin * 0.9) + unit;
                }
                if (el.style.paddingBottom) {
                    const currentPadding = parseFloat(el.style.paddingBottom);
                    const unit = el.style.paddingBottom.replace(/[\d.]/g, '');
                    el.style.paddingBottom = (currentPadding * 0.9) + unit;
                }
            });
        }
    };
    
    // Run overflow check
    setTimeout(checkOverflow, 50);
};
