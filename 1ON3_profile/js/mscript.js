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
    // Fuction that SHOWS pop-up window
    $('.show_popup1').click(function() { // Вызываем функцию по нажатию на кнопку
        var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $('.popup_create').show(); // Открываем окно
        $('.overlay_popup_create').show(); // Открываем блок заднего фона
    });
    // Function that HIDES pop-up window
    $('.overlay_popup_create').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup_create, .popup_create').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });

    // Fuction that SHOWS pop-up window EDIT
    $('.show_popup2').click(function() { // Вызываем функцию по нажатию на кнопку
        var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $('.popup_edit').show(); // Открываем окно
        $('.overlay_popup_edit').show(); // Открываем блок заднего фона
    });
    // Function that HIDES pop-up window
    $('.overlay_popup_edit').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup_edit, .popup_edit').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });

                            /*BUTTONS*/
    // Opens Playlist Menu
    $('.openbtn').on("click", function(){
        openPlaylistMenu();
    });
    // Closes Playlist Menu
    $('.closebtn, .show_popup').on("click", function(){
        closePlaylistMenu();
    });
    
    // Button "Create" in pop-up window (opens pl menu,
    // hides pop-up window and shows pl name
    $('.btn_create input').on("click", function(){
        ShowName();
        openPlaylistMenu();
        $('.overlay_popup_create, .popup_create').hide();
    });

     // hides pop-up window and shows pl name
     $('.btn_save input').on("click", function(){
        ShowName();//???????????????????????????????????????
        openPlaylistMenu();
        $('.overlay_popup_edit, .popup_edit').hide();
    });

    /*Opens playlist form (featuring)*/
    $("#plylstNm").on('click', function()
    {
        closePlaylistMenu();

    });
    
});


    // class Playlist
    // {
    //     constructor(playlistName)
    //     {
    //         this._playlistName = playlistName;
    //     }
        
    //     get_plName()    //Getter for playlist Name
    //     {
    //         return this.playlistName;
    //     }
    //     set_playlistName(x)         //Setter for playlist name
    //     {
    //         this._playlistName = x;
    //     }
        
    //     //Description
    //     _playlistDescription;
    //     set_playlistDescription(x){     //Setter
    //         this._playlistDescription = x;
    //     }
    //     get_playlistDescription()       //Getter
    //     {
    //         return this._playlistDescription;
    //     }


    //     arrSongs = [];

    // }

    // class Song extends Playlist
    // {

    // }

    let playlist1 = new Playlist("Linkin Park");
/*Function that shows pl name in PL MENU*/
    function ShowName()
    {
        /*Reads pl NAME*/
        //let playlistName = $("#playlistName").val();
        //d$("#plylstNm").html(playlistName);
        
        // let playlistDescription = $("playlistDescription").val();
        // $("#plystDscrptn").html(playlistDescription);
    }
    

    
    /* Set the width of the sidebar to 400px (show it) */
function openPlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "400px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closePlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "0";
  }
