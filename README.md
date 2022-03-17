<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jusoftdev/bloggify">
    <img src="https://i.imgur.com/QdzNFbA.png" alt="Logo">
  </a>

  <h3 align="center">Bloggify</h3>

  <p align="center">
    Now it's easy for Bloggers to host and manage their own Blog with ease.
    <br />
    <a href="https://github.com/jusoftdev/bloggify"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://bloggify.jusoft.dev">View Demo</a>
    ·
    <a href="https://github.com/jusoftdev/bloggify/issues">Report Bug</a>
    ·
    <a href="https://github.com/jusoftdev/bloggify/issues">Request Feature</a><br>&nbsp;
<a href="https://www.buymeacoffee.com/jusoft" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#todo">To do</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Bloggify is a place to read, write and host


<img src="https://i.imgur.com/gwdMp0s.png"/>


### Built With

* [Next.js](http://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com)
* [SanityCMS (Blog Schema)](https://www.sanity.io/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [npm](https://npmjs.com)
* [NodeJS](https://nodejs.org)
* NextJS
  ```sh
  npm i next react react-dom
  ```
* Sanity
  ```sh
  npm i --global @sanity/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jusoftdev/bloggify.git
   ```
2. Install packages
   ```sh
   npm i
   ```
3. [Create Sanity Project](https://www.sanity.io/manage)
4. Insert your Data in `.env`
```env
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=ID
SANITY_API_TOKEN=TOKEN
```

4. Insert your Sanity Details in `bloggify-cms/sanity.json`
5. Run Backend (Sanity Studio)
  ```sh
  cd bloggify-cms
  npm start
  ```
6. Run Frontend
```sh
next dev
```
7. Deploying the Studio (so you can access it everywhere)
 ```
 sanity deploy
 ```


<!-- USAGE EXAMPLES -->
## Usage

Sanity Studio
<img src="https://i.imgur.com/ryxCAIj.png" />
<img src="https://i.imgur.com/Hefhhea.png" />
Postings
<img src="https://i.imgur.com/gydePom.png" /><br>
Comments<br>
<img src="https://i.imgur.com/gg8P40P.png" />
<img src="https://i.imgur.com/NfPO50X.png" /><br>
Fully responsive Design <br>
<img src="https://i.imgur.com/pt4GZlE.png" />
<br>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jusoftdev/bloggify/issues) for a list of proposed features (and known issues).

<!-- todo -->
## Todo

* Dark Mode
* Advanced Posting
* Autonomic contribution



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

JuSoft - [@jusoftdev](https://twitter.com/jusoftdev) - [Discord Server](http://jsft.be/discord) - support@jusoft.dev

Project Link: [https://github.com/jusoftdev/bloggify](https://github.com/jusoftdev/bloggify)



<!-- ACKNOWLEDGEMENTS -->
## Contributors

* [juhom205](https://github.com/juhom205)
