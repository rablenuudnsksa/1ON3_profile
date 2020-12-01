"use strict";

        
/*jQuery code*/
$(document).ready(function()
{
    // Fuction that SHOWS pop-up window
    $('.show_popup1').click(function() { // Вызываем функцию по нажатию на кнопку
        var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
        $('.popup_create').show(); // Открываем окно
        $('.overlay_popup_create').show(); // Открываем блок заднего фона
        closePlaylistMenu();

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
        closePlaylistMenu();
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
        openPlaylistMenu();
        $('.overlay_popup_create, .popup_create').hide();



        //Gets playlist name from input
        let name_playlist = document.getElementById("playlistName").value;
        //Playlist name
        playlists[i] = new Playlist(name_playlist); //Creates new playlist
        console.log(playlists[i].get_playlistName()); //Gets name
        
        //Gets playlist description from input
        let description_playlist = document.getElementById("playlistDescription").value;
        //Playlist description
        playlists[i].set_playlistDescription(description_playlist);
        console.log(playlists[i].get_playlistDescription());

        i++;
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
    //Counter of playlists
    let i = 0;
    let playlists = []; //Playlists array


    /*Playlist CLASS*/
    class Playlist
    {
        constructor(playlistName)       //Constructor that receive playlist name
        {
            this._playlistName = playlistName;
        }
        
        //Playlist Name
        get_playlistName()    //Getter for playlist Name
        {
            return this._playlistName;
        }
        set_playlistName(x)         //Setter for playlist name
        {
            this._playlistName = x;
        }
        
        //Description
        _playlistDescription;
        set_playlistDescription(x){     //Setter
            this._playlistDescription = x;
        }
        get_playlistDescription()       //Getter
        {
            return this._playlistDescription;
        }

        //Song array
        arrSongs = [];
        set_arraySongs (track)  //Setter
        {
            this.arrSongs.push(track);
        }

    }

    class Song extends Playlist
    {
        constructor(nameSong, artist)   //Constructor receives song name and artist
        {
            this.nameSong = nameSong;
            this.artist = artist;
        }
        
        //Song name
        get_nameSg() {  //Getter
            return this.nameSong;
        }
        set_nameSg(x){  //Setter
            this.nameSong = x;
        }

        //Artist
        get_artist() {  //Getter
            return this.artist;
        }
        set_artist(x){  //Setter
            this.artist = x;
        }

        //URL
        get_url() { //Getter
            return this.url;
        }
        set_url(x){ //Setter
            this.url = x;
        }

    }

    
    /* Set the width of the sidebar to 400px (show it) */
function openPlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "400px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closePlaylistMenu() {
    document.getElementById("myPlaylists").style.width = "0";
  }

  /*Dropdownscript*/

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
    function dropdownScript() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function dropdownScript1() {
        document.getElementById("myDropdown1").classList.toggle("show");
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

    

        
