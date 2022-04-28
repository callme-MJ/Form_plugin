# Form_plugin

A javascript plugin for collecting info from user through popup form

# Getting Started
Get started by downloading the content of this repo. There are two main files of concern: pluginForm.js and pluginForm.css.

Link both files to the page where you want the form

<link rel="stylesheet" href="pluginForm.css"> <script src="pluginForm.js>

# Using the plugin
  
Steps
1 copy and paste the code given below to your intented file.
  
  `div id="icon" class="icon" >
        <img class="pluginFormIcon" src="https://p7.hiclipart.com/preview/486/835/831/computer-icons-form-template-desktop-wallpaper-others.jpg">
    </div>
    <div id="container" class="pluginFormContainer" >
       <form class="submitform">
            <div id="formcontainer" class="formcontainer">
                <span id="close">Close</span>
              <h1>Add your Info</h1>   
              <hr>          
              <label for="firstname"><b>Name</b></label>
              <input class="pluginInput" type="text" id="name" required>
              <label for="email"><b>Email</b></label>
              <input type="email" class="pluginInput" id="email" required>
              <hr>
              <button type="submit" id="submitbtn">Submit</button>
            </div>
        </form>
    </div>`
  

2 You can see an icon on the bottom right side of your page, by clicking it a form will come out.

3 after filling the inputs you can see the given inputs in your console when you press submit.
