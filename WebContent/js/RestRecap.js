$(document).ready(function()
{	
    listerTable();
});

function listerTable()
{
	$.ajax({
    	type:"GET",
		url:"http://localhost:8080/ProjetJEE/rest/RestService/recapitulatif",
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

function verifierEtatTable(table)
{
	var couleurTable;
	
	if(table.id_Etats_Tables == 1)
	{
		couleurTable = '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableVerte.png">';
	}
	else if(table.id_Etats_Tables == 2)
	{
		couleurTable = '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableGrise.png">';
	}
	else if(table.id_Etats_Tables == 3)
	{
		couleurTable = '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableRouge.png">';
	}
	else if(table.id_Etats_Tables == 4)
	{
		couleurTable = '<img class="imgTable '+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableOrange.png">';
	}
	
	return couleurTable;
}

function ajouterTableRennes(table)
{
	var afficherTable = '<div class="col-3">'
		+ verifierEtatTable(table);
		+ '</div>';
	
	$("#containerTableRennes").append(afficherTable);
}

function ajouterTableNantes(table)
{
	var afficherTable = '<div class="col-3">'
		+ verifierEtatTable(table);
		+ '</div>';
	
	$("#containerTableNantes").append(afficherTable);
}