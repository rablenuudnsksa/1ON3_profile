/*Dropdownscript*/

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        /* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("myPlaylists").style.width = "400px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("myPlaylists").style.width = "0";
  }

/*jQuery code*/
/*$(document).ready(function()
{*/
    function ShowName()
    {
        let playlistName = $("#playlistName").val();
        $("#plylstNm").html(playlistName);
        // let playlistDescription = $("playlistDescription").val();
        // $("#plystDscrptn").html(playlistDescription);
    }

// });
