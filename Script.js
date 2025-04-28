document.addEventListener('DOMContentLoaded', function() {
    // Enforce dark mode only - always ensure dark mode is active
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    
    // Enhanced PDF Download Functionality
    const setupPdfDownload = function() {
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
    
    const preparePdfVersion = function() {
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
                            <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">Google Associate Android Developer</div>
                            <div style="font-size: 9pt; color: #6b7280;">2022</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; margin-bottom: 6px; align-items: center;">
                        <span style="color: #3b82f6; margin-right: 8px;">•</span>
                        <div>
                            <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">Azure Fundamentals AZ-900</div>
                            <div style="font-size: 9pt; color: #6b7280;">2021</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; margin-bottom: 6px; align-items: center;">
                        <span style="color: #3b82f6; margin-right: 8px;">•</span>
                        <div>
                            <div style="font-size: 10pt; font-weight: 500; color: #1f2937;">TOEIC - 925 points</div>
                            <div style="font-size: 9pt; color: #6b7280;">2020</div>
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
    
    // Enhanced animations for sections with improved timing
    const sections = document.querySelectorAll('section');
    const animateOnScroll = function() {
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                if (!section.classList.contains('animated')) {
                    section.classList.add('animated');
                    
                    // Generate random delay between 100ms and 400ms
                    const delay = 100 + Math.random() * 300;
                    
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                        
                        // Add a subtle animation based on section
                        if (index % 4 === 0) {
                            section.classList.add('fade-in');
                        } else if (index % 4 === 1) {
                            section.classList.add('slide-in-left');
                        } else if (index % 4 === 2) {
                            section.classList.add('slide-in-right');
                        } else {
                            section.classList.add('zoom-in');
                        }
                    }, delay);
                }
            }
        });
    };
    
    // Initialize sections for animations with improved styling
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        
        if (index % 4 === 0) {
            section.style.transform = 'translateY(30px)';
        } else if (index % 4 === 1) {
            section.style.transform = 'translateX(-30px)';
        } else if (index % 4 === 2) {
            section.style.transform = 'translateX(30px)';
        } else {
            section.style.transform = 'scale(0.95)';
        }
        
        section.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load with staggered timing for initial animations
    setTimeout(() => {
        animateOnScroll();
        
        // Animate navbar links with delay
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 200 + (index * 100));
        });
    }, 300);
    
    // Remove dark mode toggle functionality entirely
    const createDarkModeToggle = function() {
        // Do nothing - we're removing the toggle completely
    };
    
    // Enhanced card hover effects with the new color scheme
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px)';
            card.style.borderColor = 'var(--primary)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.borderColor = '';
        });
    });
    
    // Add smooth scrolling for anchor links with improved easing
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Add skill progress bar animations
    const animateSkills = function() {
        const skillBars = document.querySelectorAll('.skill-progress-bar');
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-progress') || '0';
            bar.style.width = percentage + '%';
        });
    };
    
    // Initialize the page hero animation
    setTimeout(() => {
        const heroElement = document.querySelector('.hero-content');
        if (heroElement) {
            heroElement.classList.add('animated');
        }
        
        animateSkills();
    }, 300);
    
    // Initialize PDF download functionality
    setupPdfDownload();
    
    // Add interactive background effect
    const headerSection = document.getElementById('about');
    const interactiveBlob = document.querySelector('.interactive-blob');
    
    if (headerSection && interactiveBlob) {
        headerSection.addEventListener('mousemove', function(e) {
            // Calculate mouse position relative to the header
            const rect = headerSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate position as percentage of header dimensions
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Move the blob slightly based on mouse position (subtle effect)
            const xOffset = 50 + (xPercent - 0.5) * 20; // +/- 10% from center
            const yOffset = 50 + (yPercent - 0.5) * 20; // +/- 10% from center
            
            // Apply transform with a slight delay for smooth effect
            interactiveBlob.style.transition = 'transform 0.3s ease-out';
            interactiveBlob.style.transform = `translate(calc(-${xOffset}%), calc(-${yOffset}%))`;
        });
        
        // Reset blob position when mouse leaves the header
        headerSection.addEventListener('mouseleave', function() {
            interactiveBlob.style.transition = 'transform 0.8s ease-out';
            interactiveBlob.style.transform = 'translate(-50%, -50%)';
        });
    }
    
    // Create dynamic particles that appear randomly
    const createRandomParticles = function() {
        const headerSection = document.getElementById('about');
        if (!headerSection) return;
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const left = Math.random() * 100;
            const top = 80 + Math.random() * 20; // Bottom 20% of the header
            
            // Random size
            const size = 2 + Math.random() * 3; // Slightly smaller particles
            
            // Apply styles
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = '0';
            
            // Make particles darker too
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
            
            // Animation duration and delay
            const duration = 5 + Math.random() * 5;
            particle.style.animation = `particleDrift ${duration}s linear forwards`;
            
            // Add to DOM
            headerSection.appendChild(particle);
            
            // Remove after animation completes
            setTimeout(() => {
                if (particle.parentNode === headerSection) {
                    headerSection.removeChild(particle);
                }
            }, duration * 1000);
        }, 500); // Create new particle every 500ms
    };
    
    // Initialize particle effect
    createRandomParticles();
    
    // Initialize dark hero animation
    initDarkHeroAnimation();
});

// Function to initialize the dark hero animation
function initDarkHeroAnimation() {
    const matrixColumns = document.querySelectorAll('.matrix-column');
    
    // Fill matrix columns with random characters
    matrixColumns.forEach(column => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/\\|[]{}!@#$%^&*()_+-=';
        const columnHeight = Math.floor(Math.random() * 15) + 10; // 10-25 characters per column
        
        let columnContent = '';
        for (let i = 0; i < columnHeight; i++) {
            columnContent += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
        }
        
        column.innerHTML = columnContent;
    });
    
    // Make code lines react to mouse movement
    const heroSection = document.getElementById('about');
    const codeLines = document.querySelectorAll('.code-line');
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', function(e) {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate position as percentage
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            // Subtle movement of code lines based on mouse position
            codeLines.forEach((line, index) => {
                const offsetX = (xPercent - 0.5) * 10; // -5px to 5px
                const offsetY = (yPercent - 0.5) * 5;  // -2.5px to 2.5px
                const baseRotation = parseFloat(line.style.getPropertyValue('--rotate') || '0deg');
                
                line.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${baseRotation}deg)`;
            });
        });
    }
}
