jQuery(document).ready(function(){


    document.getElementById("co").addEventListener("click", function(){
        connection();
        });
        
        function connection(){
        
            var id = document.getElementById('inputPseudo').value;
            var mdp = document.getElementById('inputPseudo').value;
            console.log("camarse");
            jQuery.ajax({
                type: 'POST',
                url: 'co.php',
                dataType: 'html',
                data:{
                    id:id,
                    mdp:mdp
                },
                success: function (data){
                                 var verif=data.toString();
                                 if(verif=="true"){     
                                     console.log("vous êtes connecté");
                                    document.location.href="index.html"
                                    document.getElementById("conne").value="vous êtes connecté en tant que baptiste"
                                 }

                }
            }); 
        }

});


