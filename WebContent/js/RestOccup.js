$(document).ready(function()
{	
    listerTable();
});

function listerTable()
{
	$.ajax({
    	type:"GET",
		url:"http://localhost:8080/ProjetJEE/rest/RestService/occupation",
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

function afficherForm(id)
{
	if($("#"+id).hasClass('1'))
	{
		$('#modalForm').modal('show');
		
		$( "#submit" ).click(function() {
			
			var idTable = id;
			var nom = $('#nom').val();
			var nbrePersonne = $('#nbrePersonne').val();
			var telPersonne = $('#telPersonne').val();
			
			$.ajax({
		    	type:"POST",
				url:"http://localhost:8080/ProjetJEE/rest/RestService/reservation",
				dataType : 'JSON',
				data : "nom=" + nom + "&nbrePersonne=" + nbrePersonne + "&telPersonne=" + telPersonne + "&id=" + idTable,
				success : function(resultat, statut)
				{
					$('#nom').val("");
					$('#nbrePersonne').val("");
					$('#telPersonne').val("");
					$('#modalForm').modal('hide');
					$("#containerTableRennes").empty();
					$("#containerTableNantes").empty();
					listerTable();
			    },
			    error : function(resultat, statut, erreur)
			    {
			    	console.log(erreur);
			    }
		    });
		});	
	}
	else if($("#"+id).hasClass('2'))
	{
	    console.log('Réservée');
	}
}

function verifierEtatTable(table)
{
	var couleurTable;
	
	if(table.id_Etats_Tables == 1)
	{
		couleurTable = '<img class="'+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableVerte.png">';
	}
	else if(table.id_Etats_Tables == 2)
	{
		couleurTable = '<img class="'+ table.id_Etats_Tables+'" id="'+ table.id +'" src="img/tableGrise.png">';
	}
	
	return couleurTable;
}

function ajouterTableRennes(table)
{
	var afficherTable = '<div onclick="afficherForm('+table.id+');" id="'+ table.id +'" class="col-3 imgTable '+ table.id_Etats_Tables +'">'
		+ verifierEtatTable(table);
		+ '</div>';
	
	$("#containerTableRennes").append(afficherTable);
}

function ajouterTableNantes(table)
{
	var afficherTable = '<div onclick="afficherForm('+table.id+');" id="'+ table.id +'" class="col-3 imgTable'+ table.id_Etats_Tables +'">'
		+ verifierEtatTable(table);
		+ '</div>';
	
	$("#containerTableNantes").append(afficherTable);
}