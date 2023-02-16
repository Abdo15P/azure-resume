# Azure Resume Challenge
This project utilizes multiple technologies in order to build a peronsal resume website and deploy it to Azure. I decided to take on this challenge to improve my Azure skills and get more hands-on experience. The project was done following [ACG's Video](https://www.youtube.com/watch?v=ieYrBWmkfno "ACG's video").

[My resume on Azure](https://azureresume14.azureedge.net)

## Approach

1- Create a repository for the project on Github. [Repo](https://github.com/Abdo15P/azure-resume)

2- Building the Frontend.[A template](https://www.themezy.com/free-website-templates/151-ceevee-free-responsive-website-template) was used to build the frontend. I just customized the code to put my personal information.
  
3- Create a storage account on Azure and upload the website content to it. At this point I had a static website on Azure.

4- Create Azure CDN profile and endpoint. Azure CDN is a globally distributed network of servers that can efficiently deliver web content to consumers. It stores cached content on the edge servers' PoP locations that are close to users, thereby minimizing network latency.

5- Create a CosmosDB account, create a database and a conatainer containing a counter item.

6- Create an HTTP trigger function locally using Azure Functions extension on Visual Studio that will be triggered using a Javascript API. The function has an input and output binding to retrieve data from the CosmosDB instance and update the counter. The function was then deployed to Azure.

7- Create javascript code to call the function API whenever the page gets loaded and display the counter. This code was copied from the template on [ACG's resume challenge repo](https://github.com/madebygps/cgc-azure-resume).

8- Building a CI/CD pipeline using Github Actions.[This guide](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions) was used to implement GitHub Actions workflow. This was done so that when a new website code is pushed, the Azure Storage blob automatically gets updated.

## Tools Used

Github

Html/CSS/Javascript

C#

Azure Storage account

Azure CDN

Azure CosmosDB

Azure Functions

Github Actions
