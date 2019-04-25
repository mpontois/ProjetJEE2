<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
		<title>Occupation</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	</head>
	<body>
		<%@include file="header.jsp"%>
		<div class="container">
			<h1 class="text-center m-3">Tables libres et réservées du restaurant de Rennes</h1>
			<hr>
			<div id="containerTableRennes" class="row text-center m-3">
				
			</div>
			
			<h1 class="text-center m-3">Tables libres et réservées du restaurant de Nantes</h1>
			<hr>
			<div id="containerTableNantes" class="row text-center m-3">
				
			</div>
		</div>
		<!-- Modal -->
		<div class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="exampleModalLabel">Formulaire de réservation</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <form>
				  <div class="form-group">
				    <label for="nom">Nom de réservation</label>
				    <input type="text" id="nom" class="form-control" placeholder="Nom de la personne qui réserve">
				  </div>
				  <div class="form-group">
				    <label for="nbrePersonne">Nombre de personne</label>
				    <input type="number" class="form-control" id="nbrePersonne" placeholder="Nombre de personne">
				  </div>
				  <div class="form-group">
				    <label for="telPersonne">Numéro de téléphone</label>
				    <input type="tel" class="form-control" id="telPersonne" placeholder="Téléphone de la personne qui réserve">
				  </div>
				</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" id="fermer" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
		        <button type="button" id="submit" class="btn btn-primary">Réserver</button>
		      </div>
		    </div>
		  </div>
		</div>
	</body>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/RestOccup.js"></script>
</html>