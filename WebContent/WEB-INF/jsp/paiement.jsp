<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
		<title>Paiement</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	</head>
	<body>
		<%@include file="header.jsp"%>
		<div class="container">
			<h1 class="text-center m-3">Tables commandées du restaurant de Rennes</h1>
			<hr>
			<div id="containerTableRennes" class="row text-center m-3">
				
			</div>
			
			<h1 class="text-center m-3">Tables commandées du restaurant de Nantes</h1>
			<hr>
			<div id="containerTableNantes" class="row text-center m-3">
				
			</div>
		</div>
	</body>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/RestPaiement.js"></script>
</html>