document.addEventListener('DOMContentLoaded', function() {
    // Initialize with light mode instead of dark mode
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
    }
    
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Enhanced PDF Download Functionality
    const setupPdfDownload = function() {
        const pdfButtons = [
            document.getElementById('pdf-download'),
            document.getElementById('pdf-download-mobile'),
            document.getElementById('pdf-download-hero')
        ];
        
        pdfButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    preparePdfVersion();
                    
                    // Give the browser a moment to apply print styles
                    setTimeout(() => {
                        window.print();
                    }, 300);
                });
            }
        });
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
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Mobile Development</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Cybersecurity</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Machine Learning</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Photography</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Mountain Hiking</span>
                    <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Chess</span>
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
                                <div style="width: 70px; font-size: 9pt; color: #4b5563;">Kotlin</div>
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
                                <div style="width: 70px; font-size: 9pt; color: #4b5563;">C#</div>
                                <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                    <div style="width: 65%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Web Development -->
                    <div style="margin-bottom: 12px;">
                        <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Web Development</h3>
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
                                    <div style="width: 85%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                                <div style="width: 70px; font-size: 9pt; color: #4b5563;">Node.js</div>
                                <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                    <div style="width: 75%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 5px; width: 100%;">
                                <div style="width: 70px; font-size: 9pt; color: #4b5563;">Angular</div>
                                <div style="flex-grow: 1; height: 8px; background-color: #e5e7eb; border-radius: 4px;">
                                    <div style="width: 65%; height: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); border-radius: 4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile and additional skills -->
                <div style="margin-bottom: 12px;">
                    <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Mobile & Technologies</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Android SDK</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Jetpack Compose</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Flutter</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">React Native</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Firebase</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">MongoDB</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">SQL</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Git</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">Docker</span>
                        <span style="display: inline-block; font-size: 9pt; padding: 3px 8px; background-color: #eff6ff; color: #1e40af; border-radius: 4px; border: 1px solid #dbeafe;">CI/CD</span>
                    </div>
                </div>
                
                <!-- Soft Skills -->
                <div style="margin-bottom: 12px;">
                    <h3 style="font-size: 11pt; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Soft Skills</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px;">
                        <div style="display: flex; align-items: center; gap: 3px;">
                            <span style="color: #22c55e; font-size: 10pt;">✓</span>
                            <span style="font-size: 9pt; color: #4b5563;">Problem Solving</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 3px;">
                            <span style="color: #22c55e; font-size: 10pt;">✓</span>
                            <span style="font-size: 9pt; color: #4b5563;">Team Collaboration</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 3px;">
                            <span style="color: #22c55e; font-size: 10pt;">✓</span>
                            <span style="font-size: 9pt; color: #4b5563;">Time Management</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 3px;">
                            <span style="color: #22c55e; font-size: 10pt;">✓</span>
                            <span style="font-size: 9pt; color: #4b5563;">Critical Thinking</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 3px;">
                            <span style="color: #22c55e; font-size: 10pt;">✓</span>
                            <span style="font-size: 9pt; color: #4b5563;">Communication</span>
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
                            <div style="font-weight: 600; font-size: 11pt; color: #1f2937;">Android Developer (Internship)</div>
                            <div style="font-size: 9pt; color: #3b82f6;">June 2022 - Sept 2022</div>
                        </div>
                        <div style="font-size: 10pt; color: #4b5563; font-style: italic; margin-bottom: 3px;">Mobile App Solutions Inc.</div>
                        <div style="font-size: 9pt; color: #4b5563; line-height: 1.3; margin-bottom: 5px;">
                            Developed and maintained Android applications using Kotlin and Jetpack Compose. 
                            Implemented RESTful API integration and local data persistence using Room database.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Kotlin</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Jetpack Compose</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Room</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Retrofit</span>
                        </div>
                    </div>
                    
                    <!-- Experience 2 -->
                    <div style="margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div style="font-weight: 600; font-size: 11pt; color: #1f2937;">Student Researcher</div>
                            <div style="font-size: 9pt; color: #3b82f6;">Oct 2021 - May 2022</div>
                        </div>
                        <div style="font-size: 10pt; color: #4b5563; font-style: italic; margin-bottom: 3px;">AGH University of Kraków - Computer Science Department</div>
                        <div style="font-size: 9pt; color: #4b5563; line-height: 1.3; margin-bottom: 5px;">
                            Participated in a research project focused on mobile app security analysis. 
                            Developed tools to detect security vulnerabilities in Android applications.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Java</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Python</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Android</span>
                            <span style="display: inline-block; font-size: 8pt; padding: 2px 6px; background-color: #dbeafe; color: #1e40af; border-radius: 4px;">Security</span>
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
                        <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Smart Home Controller</div>
                        <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt;">
                            Android application for managing smart home devices with automation and energy monitoring.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Kotlin</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">MVVM</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Firebase</span>
                        </div>
                    </div>
                    
                    <!-- Project 2 -->
                    <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                        <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Task Manager Web App</div>
                        <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt;">
                            Collaborative task management with real-time updates and progress tracking.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">React</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Node.js</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">MongoDB</span>
                        </div>
                    </div>
                    
                    <!-- Project 3 -->
                    <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                        <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">Fitness Tracker</div>
                        <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt;">
                            Cross-platform mobile app for tracking workouts and health metrics with personalized goals.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Flutter</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Dart</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Firebase</span>
                        </div>
                    </div>
                    
                    <!-- Project 4 -->
                    <div style="font-size: 9pt; padding: 8px; background-color: #f9fafb; border-radius: 5px; border-left: 3px solid #3b82f6;">
                        <div style="font-weight: 600; font-size: 10pt; color: #1f2937; margin-bottom: 3px;">E-Commerce Platform</div>
                        <div style="color: #4b5563; line-height: 1.3; margin-bottom: 5px; font-size: 8pt;">
                            Full-stack solution with product management, shopping cart, and payment integration.
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 3px;">
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">C#</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">ASP.NET</span>
                            <span style="display: inline-block; font-size: 7pt; padding: 1px 5px; background-color: #e0e7ff; color: #4338ca; border-radius: 3px;">Angular</span>
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
    
    // Add dark mode toggle functionality that starts in light mode
    const createDarkModeToggle = function() {
        const toggle = document.createElement('div');
        toggle.className = 'dark-mode-toggle';
        toggle.innerHTML = '<i class="fas fa-moon"></i>'; // Light mode initially, so show moon icon
        document.body.appendChild(toggle);
        
        toggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            document.body.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                toggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                toggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    };
    
    createDarkModeToggle();
    
    // Enhanced card hover effects
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.boxShadow = '';
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
});
