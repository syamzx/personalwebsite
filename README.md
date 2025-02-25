<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB-SYMZXX</title>
    <link rel="stylesheet" href="ini.css">
    <link rel="shortcut icon" href="favicon-16x16.png" type="image/x-icon">
   <link rel="icon" href="favicon-16x16.png" type="image/x-icon">
</head>
<header>
   
    

<body>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e7f3ff; 
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            background-color: #570061; 
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #ffffff; 
            text-align: center;
            margin-bottom: 20px;
        }
        .titik-tiga {
            position: absolute;
            top: 20px; 
            right: 20px; 
            font-size: 24px;
            cursor: pointer;
            color: #b819c4; 
            transition: color 0.3s;
        }
        .titik-tiga:hover {
            color: #f9662d; 
        }
        .dropdown {
            display: none; 
            position: absolute;
            top: 30px; 
            right: 0;
            background-color: #54186f; 
            border: 1px solid #c468ef; 
            border-radius: 4px; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
            z-index: 1; 
            transform: rotate(0deg); 
            transition: transform 0.5s; 
        }
        .dropdown.show {
            display: block; 
            transform: rotate(360deg);
        }
        .dropdown a {
            display: block;
            padding: 10px; 
            text-decoration: none; 
            color: #e61c92; 
            transition: background-color 0.3s; 
        }
        .dropdown a:hover {
            background-color: #a9209d; 
            color: rgb(255, 0, 21); 
        }
        footer {
            text-align: center;
            margin-top: 40px;
            font-size: 14px;
            color: #ffffff;
        }
    </style>
   
    
</head>

<body>


    <div class="container">
        <h1>Welcome to SYMZXX menu</h1>
        <div class="titik-tiga" onclick="toggleDropdown()">•••</div>
        <div class="dropdown" id="dropdownMenu">
            <a href="Placetoput.html">Home</a>
            <a href="aboutme.html">About Me</a>
            <a href="contactme.html">Contact Me</a>
            <a href="mycv.html">My cv</a>
            <a href="musicroom.html">Music room</a>
            
           
        </div>
    </div>
    <header style="text-align: center;">
    <img src="foto.jpg" width="100" height="100" style="border-radius: 50%; "/>
    <h1>Asyam Farel F.</h1>
    <p>(Future IT specialist)</p>
    <hr/>
   </header>

<article style="text-align: center;">

    <body style="font-size: medium; text-align: justify;" text="white">
                
        <font size="4S">  

            <p> <div>
                Hai, my name is Asyam Farel im a student at SMKN 2 PPU, and
                im learning how to design and host a web, 
            </p></div>
        </article>
<head>
    <div style="max-width: 600px; margin: 3em auto">
        <table border="1" width="100%" bgcolor="#54186f">
            <thead>
                <tr>
                    

                    <th>Skill</th>
                    <th>Prestasi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>HTML (Moderate)         </li>
                            <li>CSS (Moderate)          </li>
                            <li>Network (Moderate)       </li>
                            <li>Linux (Moderate)         </li>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>2 Gold Medal in archery competition</li>
                            <li>3 Silver Medal in archery competition</li>
                            <li>4 Bronze Medal in archery competition</li>
                        </font>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</head>
</body>

    <footer>
        &copy; 2025_Asyam_Farel by Skada_XI TJKT Department
    </footer>

    <script>
        function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
        }

        // Menutup dropdown jika klik di luar
        window.onclick = function(event) {
            if (!event.target.matches('.titik-tiga')) {
                const dropdown = document.getElementById('dropdownMenu');
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        }
    </script>

</body>
</html>
