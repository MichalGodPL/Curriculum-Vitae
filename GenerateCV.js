// Enhanced PDF Download Functionality
export const setupPdfDownload = function() {
    const pdfButton = document.getElementById('pdf-download-hero');
    
    if (pdfButton) {
        pdfButton.addEventListener('click', function(e) {
            e.preventDefault();
            preparePdfVersion();
            
            // Give the browser a moment to apply print styles
            setTimeout(() => {
                window.print();
            }, 300);
        });
    }
};

export const preparePdfVersion = function() {
    const pdfContent = document.getElementById('pdf-version');
    if (!pdfContent) return;
    
    // Create a compact version of the CV for single-page PDF with enhanced styling
    const compactCV = document.createElement('div');
    compactCV.className = 'pdf-content';
    compactCV.style.fontFamily = 'Montserrat, Arial, sans-serif';
    compactCV.style.maxHeight = '290mm'; // Ensure it fits on one page
    compactCV.style.padding = '0';
    compactCV.style.overflow = 'hidden';
    
    // Clean, modern header
    const header = document.createElement('div');
    header.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    header.style.padding = '20px';
    header.style.color = 'white';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    
    header.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h1 style="font-size: 24pt; font-weight: 700; margin: 0; color: white;">Michał Szymański</h1>
                <p style="font-size: 12pt; margin: 5px 0 0 0; color: #f0f9ff; font-weight: 300;">Frontend Developer</p>
            </div>
            <div style="text-align: right; font-size: 9pt; color: #f0f9ff;">
                <div style="margin-bottom: 5px;"><i class="fas fa-envelope" style="width: 15px;"></i> mszymanski@student.agh.edu.pl</div>
                <div style="margin-bottom: 5px;"><i class="fas fa-phone" style="width: 15px;"></i> +48 123 456 789</div>
                <div style="margin-bottom: 5px;"><i class="fas fa-map-marker-alt" style="width: 15px;"></i> Kraków, Poland</div>
                <div style="margin-bottom: 5px;"><i class="fab fa-github" style="width: 15px;"></i> github.com/mszymanski</div>
                <div><i class="fab fa-linkedin" style="width: 15px;"></i> linkedin.com/in/mszymanski</div>
            </div>
        </div>
    `;
    
    compactCV.appendChild(header);
    
    // Create main grid layout
    const mainContent = document.createElement('div');
    mainContent.style.display = 'grid';
    mainContent.style.gridTemplateColumns = '32% 68%';
    mainContent.style.gap = '15px';
    mainContent.style.padding = '15px';
    
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');
    
    mainContent.appendChild(leftColumn);
    mainContent.appendChild(rightColumn);
    compactCV.appendChild(mainContent);
    
    // LEFT COLUMN CONTENT
    
    // Education Section
    const educationSection = document.getElementById('education');
    if (educationSection) {
        const educationClone = document.createElement('div');
        educationClone.style.marginBottom = '20px';
        
        educationClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Education
            </h2>
            <div style="padding: 0 0 0 5px;">
                <div style="margin-bottom: 8px;">
                    <div style="font-weight: 600; font-size: 11pt; color: #1f2937;">Bachelor's Degree in Computer Science</div>
                    <div style="font-size: 10pt; color: #4b5563; font-weight: 500;">AGH University of Science and Technology</div>
                    <div style="font-size: 9pt; color: #3b82f6; margin: 2px 0;">2022 - Present</div>
                    <div style="font-size: 9pt; color: #4b5563; line-height: 1.3; margin-top: 5px;">
                        Currently a 3rd year student pursuing a comprehensive program covering software development, 
                        algorithms, and data structures. Focusing on practical applications with strong interest in web technologies.
                    </div>
                </div>
            </div>
        `;
        
        leftColumn.appendChild(educationClone);
    }
    
    // Languages Section
    const languagesSection = document.getElementById('languages');
    if (languagesSection) {
        const languagesClone = document.createElement('div');
        languagesClone.style.marginBottom = '20px';
        
        languagesClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Languages
            </h2>
            <div style="padding: 0 0 0 5px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-size: 10pt; color: #1f2937;">Polish</span>
                    <span style="font-size: 10pt; color: #1f2937;">Native</span>
                </div>
                <div style="width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; margin-bottom: 10px;">
                    <div style="width: 100%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 3px;"></div>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-size: 10pt; color: #1f2937;">English</span>
                    <span style="font-size: 10pt; color: #1f2937;">C1</span>
                </div>
                <div style="width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; margin-bottom: 10px;">
                    <div style="width: 85%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 3px;"></div>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="font-size: 10pt; color: #1f2937;">German</span>
                    <span style="font-size: 10pt; color: #1f2937;">A2</span>
                </div>
                <div style="width: 100%; height: 6px; background: #e5e7eb; border-radius: 3px; margin-bottom: 10px;">
                    <div style="width: 35%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 3px;"></div>
                </div>
            </div>
        `;
        
        leftColumn.appendChild(languagesClone);
    }
    
    // Certificates Section
    const certificatesSection = document.getElementById('certificates');
    if (certificatesSection) {
        const certificatesClone = document.createElement('div');
        certificatesClone.style.marginBottom = '20px';
        
        certificatesClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Certificates
            </h2>
            <div style="padding: 0 0 0 5px;">
                <div style="display: flex; margin-bottom: 6px; align-items: center;">
                    <span style="color: #3b82f6; margin-right: 8px;">•</span>
                    <div>
                        <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">Building AI Powered Chatbots Without Programming</div>
                        <div style="font-size: 9pt; color: #6b7280;">IBM (2024)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 6px; align-items: center;">
                    <span style="color: #3b82f6; margin-right: 8px;">•</span>
                    <div>
                        <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">Introduction to Packet Tracer</div>
                        <div style="font-size: 9pt; color: #6b7280;">Cisco (2024)</div>
                    </div>
                </div>
                
                <div style="display: flex; margin-bottom: 6px; align-items: center;">
                    <span style="color: #3b82f6; margin-right: 8px;">•</span>
                    <div>
                        <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">HTML and CSS in Depth</div>
                        <div style="font-size: 9pt; color: #6b7280;">Meta (2023)</div>
                    </div>
                </div>
            </div>
        `;
        
        leftColumn.appendChild(certificatesClone);
    }
    
    // Interests Section
    const interestsSection = document.getElementById('interests');
    if (interestsSection) {
        const interestsClone = document.createElement('div');
        interestsClone.style.marginBottom = '20px';
        
        interestsClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Interests
            </h2>
            <div style="display: flex; flex-wrap: wrap; gap: 5px; padding: 0 0 0 5px;">
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">Mobile Development</span>
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">History</span>
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">Machine Learning</span>
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">Geography</span>
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">Programming</span>
                <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: transparent; color: #1e40af; border-radius: 4px; border: 1px solid #ffffff;">Biology</span>
            </div>
        `;
        
        leftColumn.appendChild(interestsClone);
    }
    
    // RIGHT COLUMN CONTENT
    
    // Skills Section (Completely Redesigned)
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsClone = document.createElement('div');
        skillsClone.style.marginBottom = '20px';
        
        skillsClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Skills
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <!-- Programming Languages -->
                <div style="margin-bottom: 12px;">
                    <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Programming</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">Java</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 90%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">C++</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 85%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">JavaScript</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 80%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">Python</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 75%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">Kotlin</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 65%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Web Development -->
                <div style="margin-bottom: 12px;">
                    <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Web & Game Dev</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">HTML/CSS</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 95%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">React</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 80%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">Unreal</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 85%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                            <div style="width: 70px; font-size: 9pt; color: #4b5563;">Node.js</div>
                            <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                <div style="width: 70%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Technical skills -->
            <div style="margin-bottom: 12px;">
                <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Technical Skills</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fee2e2; color: #991b1b; border-radius: 20px; border: 1px solid #fecaca;">GitHub</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fee2e2; color: #991b1b; border-radius: 20px; border: 1px solid #fecaca;">Linux & Bash</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #e0e7ff; color: #3730a3; border-radius: 20px; border: 1px solid #c7d2fe;">SQL</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #e0e7ff; color: #3730a3; border-radius: 20px; border: 1px solid #c7d2fe;">MariaDB</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #e0e7ff; color: #3730a3; border-radius: 20px; border: 1px solid #c7d2fe;">Computer Networks</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fef3c7; color: #92400e; border-radius: 20px; border: 1px solid #fde68a;">PyTorch</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fef3c7; color: #92400e; border-radius: 20px; border: 1px solid #fde68a;">AI-Based Tools</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fee2e2; color: #991b1b; border-radius: 20px; border: 1px solid #fecaca;">MS Office</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #fee2e2; color: #991b1b; border-radius: 20px; border: 1px solid #fecaca;">Docker</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">REST API</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #dcfce7; color: #166534; border-radius: 20px; border: 1px solid #bbf7d0;">PHP</span>
                </div>
            </div>
            
            <!-- Soft Skills -->
            <div style="margin-bottom: 12px;">
                <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Soft Skills</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Fast Learning Ability</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Teamwork Skills</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Strong Communication</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Diligence & Commitment</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Creativity & Problem-Solving</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 3px;">
                        <span style="color: #22c55e; font-size: 10pt;">✓</span>
                        <span style="font-size: 9pt; color: #4b5563;">Adaptability</span>
                    </div>
                </div>
            </div>
        `;
        
        rightColumn.appendChild(skillsClone);
    }
    
    // Experience Section
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
        const experienceClone = document.createElement('div');
        experienceClone.style.marginBottom = '20px';
        
        experienceClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Experience
            </h2>
            
            <div>
                <!-- Experience 1 -->
                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 11pt; color: #1f2937;">Mathematics Tutor</div>
                        <div style="font-size: 9pt; color: #3b82f6;">Sept 2023 - Feb 2024</div>
                    </div>
                    <div style="font-size: 10pt; color: #4b5563; font-style: italic; margin-bottom: 3px;">GoStudent, Kraków</div>
                    <div style="font-size: 9pt; color: #4b5563; line-height: 1.3; margin-bottom: 5px; text-align: justify;">
                        Provided personalized mathematics tutoring to high school students through the GoStudent E-Learning Platform.
                        Adapted teaching methods to individual student needs, helping improve problem-solving skills.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Mathematics</span>
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">E-Learning</span>
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Teaching</span>
                    </div>
                </div>
                
                <!-- Experience 2 -->
                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div style="font-weight: 600; font-size: 11pt; color: #1f2937;">Member, Game Designer, Team Leader</div>
                        <div style="font-size: 9pt; color: #3b82f6;">Apr 2023 - Present</div>
                    </div>
                    <div style="font-size: 10pt; color: #4b5563; font-style: italic; margin-bottom: 3px;">AGH Code Industry Student Research Group, Kraków</div>
                    <div style="font-size: 9pt; color: #4b5563; line-height: 1.3; margin-bottom: 5px; text-align: justify;">
                        Active member focused on game development. Design game mechanics, develop programming solutions, 
                        and lead project teams to create innovative gaming experiences.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Game Design</span>
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Team Leadership</span>
                        <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Game Development</span>
                    </div>
                </div>
            </div>
        `;
        
        rightColumn.appendChild(experienceClone);
    }
    
    // Projects Section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const projectsClone = document.createElement('div');
        
        projectsClone.innerHTML = `
            <h2 style="font-size: 14pt; color: #2563eb; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 2px solid #3b82f6;">
                Projects
            </h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <!-- Project 1 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Heart Attack Risk Detector</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        AI-powered application that predicts heart attack risk based on user input data. Implements a PyTorch model for risk assessment with an intuitive interface.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Python</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">PyTorch</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">HTML/CSS/JS</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">WebView</span>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Database Management Interface</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        Web application with robust interface for database operations. Supports basic and advanced database functions through an intuitive UI.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">PHP</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">SQL</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">HTML/CSS</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">JavaScript</span>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">CPM Logistics Calculator</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        Application for calculating Critical Path Method in logistics. Visualizes results through interactive charts and graphs for efficient project planning.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Python</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">HTML/CSS/JS</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">WebView</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Data Visualization</span>
                    </div>
                </div>
                
                <!-- Project 4 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Android Paint App</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        Mobile painting application for Android with fundamental drawing tools and color selection capabilities.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Kotlin</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Android SDK</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">UI Design</span>
                    </div>
                </div>
                
                <!-- Project 5 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">React Calculator</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        Interactive calculator application developed using React with responsive design and comprehensive mathematical functions.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">React</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">JavaScript</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">CSS</span>
                    </div>
                </div>
                
                <!-- Project 6 -->
                <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Logistics Intermediary Calculator</div>
                    <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt; text-align: justify;">
                        Tool that calculates logistics intermediary method with detailed visualizations of results using graphs and charts.
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Python</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">HTML/CSS/JS</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">WebView</span>
                        <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: transparent; color: #4b5563; border-radius: 10px; border: 1px solid #ffffff;">Data Analysis</span>
                    </div>
                </div>
            </div>
        `;
        
        rightColumn.appendChild(projectsClone);
    }
    
    // Clear the PDF container and add the new content
    pdfContent.innerHTML = '';
    pdfContent.appendChild(compactCV);
};
