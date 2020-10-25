"use strict";
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

        
        
/*jQuery code*/
$(document).ready(function()
{
    
    $('.openbtn').on("click", function(){
        openPlaylistMenu();
    });
    $('.closebtn, .show_popup').on("click", function(){
        closePlaylistMenu();
    })
    $('.btn_create input').on("click", function(){
        ShowName();
        openPlaylistMenu();
        $('.overlay_popup, .popup').hide();
    });

    $('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку
        var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $('.popup').show(); // Открываем окно
        $('.overlay_popup').show(); // Открываем блок заднего фона
    });
    $('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });

    $("#plylstNm").on('click', function()
    {
        
        closePlaylistMenu();
    });
    
});


/**/
    function ShowName()
    {
        /**/
        let playlistName = $("#playlistName").val();
        $("#plylstNm").html(playlistName);
        /**/
        let playlistDescription = $("playlistDescription").val();
        $("#plystDscrptn").html(playlistDescription);
    }

    
    /* Set the width of the sidebar to 400px (show it) */
function openPlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "400px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closePlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "0";
  }
