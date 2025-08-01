export const whoamiData = {
  name: "Mary Wangoi",
  title: "Senior DevOps Engineer",
  status: "Open to remote opportunities",
  location: "Nairobi, Kenya",
  bio: "A proven track record of transforming infrastructure into a competitive advantage. I specialize in cloud-native architecture, CI/CD automation, and optimizing AWS/Azure environments. I deliver tangible results: 50%+ cost reductions, 70% fewer incidents, and significant time savings through IaC and automation.",
};

export const skills = [
  { name: "AWS/Azure", level: 95 },
  { name: "CI/CD Automation", level: 90 },
  { name: "Terraform/IaC", level: 88 },
  { name: "Docker/Kubernetes", level: 85 },
  { name: "Python/Bash", level: 80 },
  { name: "Observability", level: 88 },
];

export const experiences = [
  {
    role: "Senior Devops Engineer",
    company: "Agile Business Solutions Limited",
    period: "Oct, 2024 - Present",
    description: ["Managed Azure Kubernetes Service (AKS) clusters for production workloads, implementing container orchestration with Docker and Helm charts for 5+ microservices applications.",
      " Built and optimized CI/CD pipelines using Azure DevOps and GitOps methodologies, achieving 95% deployment success rates and reducing time-to-production by 50%.",
      "Established comprehensive monitoring and observability solutions using Prometheus, Grafana, and ELK Stack, enabling proactive incident response and maintaining SLO/SLI targets across microservices architecture."
    ]
  },
  {
    role: "Devops Tecnical Writer",
    company: "Medium",
    period: "April, 2024 - Present",
    description: ["Created high-impact technical content on DevOps best practices, cloud architecture, and infrastructure automation, generating 5,000+ monthly readers and establishing thought leadership in the DevOps community",
      "Developed comprehensive step-by-step tutorials for AWS, Azure, Kubernetes, Docker, and Terraform implementations that received 200+ positive comments and were cited in 15+ technical forums",
    ]
  },
  {
    role: "Devops Engineer",
    company: "Techworld with Nana",
    period: "August, 2023 - September, 2024",
    description: ["Architected and managed production Kubernetes clusters on AWS EKS supporting 500+ concurrent users, achieving 99.95% uptime through proactive monitoring with Prometheus and Grafana",
      " Implemented Infrastructure as Code using Terraform for multi-environment deployments across AWS, reducing infrastructure provisioning time by 60% and ensuring consistent deployments",
      "Implemented comprehensive CI/CD pipelines using Jenkins and GitHub Actions, integrating automated testing and security scanning to improve code quality and deployment reliability"
    ]
  },
  {
    role: "Software Developerr",
    company: "Radio Africa Group",
    period: "March, 2023 - August, 2024",
    description: ["Built and maintained Docker containerization pipeline for development and testing environments, ensuring consistency across 5+ microservices and eliminating 'works on my machine' issues for the entire development team",
      "Developed full-stack web applications with CI/CD integration, implementing automated testing frameworks that achieved 90% code coverage and reduced release cycles from weeks to days",
      " Established Git branching strategy and implemented GitHub Actions workflows that automated code quality checks, security scanning, and deployment processes, increasing team velocity by 35%",
    ]
  },
];

export const projects = [
  {
    name: "Enterprise GitOps Pipeline",
    description: "Built a GitOps-driven CI/CD pipeline with Jenkins, SonarQube, Docker, Kubernetes, and ArgoCD that reduced release cycles by 75% and caught 95% of defects pre-production. Implemented containerization strategies that reduced image sizes while improving security posture.",
    tags: ["Jenkins", "SonarQube", "Docker", "Kubernetes", "ArgoCD", "CI/CD"],
    url: "https://blog.devops.dev/building-an-end-to-end-ci-cd-pipeline-with-jenkins-7ef2205d7988",
  },
  {
    name: "AWS EKS Microservices Platform",
    description: "Designed and implemented a complete AWS EKS-based platform for Go microservices that reduced deployment time by 80% and enabled multiple daily releases. Created optimized Docker builds that reduced container size by 65%, while implementing GitOps workflows with Argo CD.",
    tags: ["Kubernetes", "EKS", "FluxCD", "GitOps", "Docker"],
    url: "https://blog.devops.dev/comprehensive-devops-implementation-project-b5ae52c2bbfa",
  },
  {
    name: "Infrastructure as Code: AWS EKS & VPC",
    description: "Developed modular Terraform infrastructure that reduced EKS cluster deployment time from days to under 15 minutes. Created reusable components for secure VPC configurations with multi-AZ architecture that accelerated future deployments by 80%.",
    tags: ["ELK Stack", "Kubectl", "Terraform", "Git", "Jenkins"],
    url: "https://mary-wangoi.medium.com/aws-eks-cluster-vpc-creation-using-terraform-35b82bcc9af6",
  },
  {
    name: "AWS Cost Optimization: Automated EBS Snapshot Management",
    description: "Built intelligent AWS Lambda cost optimization system that automated EBS snapshot lifecycle management, reducing storage costs by 60% and saving $2,000+ monthly. Implemented custom scheduling, retention policies, and automated cleanup processes while maintaining compliance and disaster recovery requirements.",
    tags: ["AWS Lambda", "Python", "Boto3 Library", "Observability"],
    url: "https://medium.com/pythons-gurus/aws-cost-optimization-using-lambda-1f03fa91a00a",
  },
  {
    name: "Enterprise MERN Stack Containerization",
    description: "Containerized MERN stack application with Docker Compose using multi-stage builds that reduced image sizes by 70%. Implemented production-ready configuration with health checks and automated deployment that cut complexity by 85% while enabling seamless scaling.",
    tags: ["Docker", "Git", "MongoDB", "Docker Compose"],
    url: "https://blog.devops.dev/containerizing-a-mern-stack-application-and-deploying-using-docker-compose-46b85106039f",
  },
];


export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/wangoimwangi",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marywangoi/",
  },
];
