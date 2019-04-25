$(document).ready(function()
{	
    listerTable();
});

function listerTable()
{
	$.ajax({
    	type:"GET",
		url:"http://localhost:8080/ProjetJEE/rest/RestService/reservation",
		dataType : 'JSON',
		success : function(resultat, statut)
		{
			$.each(resultat, function(key, val) 
			{
				if(val.id_Restaurants == 1)
				{
					ajouterTableRennes(val);
				}
				else if(val.id_Restaurants == 2)
				{
					ajouterTableNantes(val);
				}
			});		
	    },
	    error : function(resultat, statut, erreur)
	    {
	    	console.log(erreur);
	    }
    });
}

function ajouterTableRennes(table)
{
	var afficherTable = '<div class="col-3">'
		+ '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableVerte.png">'
	  + '</div>';

	$("#containerTableRennes").append(afficherTable);
}

function ajouterTableNantes(table)
{
	var afficherTable = '<div class="col-3">'
		+ '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableVerte.png">'
	  + '</div>';

	$("#containerTableNantes").append(afficherTable);
}
