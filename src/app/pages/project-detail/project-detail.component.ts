import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProjectDetail {
  title: string;
  techStack: string;
  githubUrl?: string;
  websiteUrl?: string;
  description: string[];
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  projectSlug: string = '';
  projectDetail: ProjectDetail | null = null;

  private projectDetails: { [key: string]: ProjectDetail } = {
    twitteranalysis: {
      title: 'Twitter Analysis',
      techStack: 'Python, HTML, CSS, Bootstrap, GCP(Pub/Sub, Dataflow, Data Studio, GAE, BigQuery)',
      githubUrl: 'https://github.com/rajaprerak/TwitterAnalysis',
      description: [
        'Created a web‑based elastic application to provide the user with a detailed analysis of the sentiment of users on top 10 trending movies and songs with the help of Google Cloud Platform services.',
        'Coded Pub/Sub routine to fetch 1000 tweets at a time from Twitter; used Dataflow for resource autoscaling and dynamic work rebalancing, reducing overall response time by 50%; stored data in BigQuery table for efficiently displaying data in Google DataStudio.',
        'Tested the scalability of web application by generating 10000 user requests with the help of Apache Beam.'
      ]
    },
    iras: {
      title: 'Image recognition as Service',
      techStack: 'Java, NodeJS, Python, HTML, CSS, Javascript, AWS(S3, EC2, SQS)',
      githubUrl: 'https://github.com/rajaprerak/image_recognition_as_a_service',
      description: [
        'Built an elastic web application that automatically scales in and scales out 20 EC2 instances based on the traffic of current users with the help of AWS services.',
        'Created custom AMIs to deploy image recognition app on EC2 instance; used SQS to handle request and response.',
        'Deployed image recognition system on AWS for the clients to access and successfully tested the application by generating 1000 requests.'
      ]
    },
    vdg: {
      title: 'Video Description Generator',
      techStack: 'Tensorflow, NLTK, Keras, Python, Opencv',
      description: [
        'Project aims at generating a description of a given video. The steps include Object detection in video frames using Convolutional Neural Network followed by generating text for each frame using a recurrent neural network and thereby generating tags with the help of natural language processing.'
      ]
    },
    blog: {
      title: 'Tech Blog',
      techStack: 'Flask, SQLAlchemy, Python, Heroku, Postgres, Bootstrap, HTML, CSS',
      websiteUrl: 'https://techingenious.herokuapp.com/',
      githubUrl: 'https://github.com/rajaprerak/Blog_with_flask',
      description: [
        'The blog is created using flask as backend. I have used bootstrap for the frontend part. For storing the data, I have made use of MySQL database. I have used the python SQL toolkit SQLAlchemy for performing database access.',
        'The blog consist of features like viewing posts. Admin can add new post, edit posts and delete posts. User can contact admin via the contact page.'
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectSlug = params['slug'];
      this.projectDetail = this.projectDetails[this.projectSlug] || null;
    });
  }
}
