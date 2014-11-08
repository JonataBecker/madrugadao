<%@page contentType="text/html" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>VRaptor</title>
<link href="<c:url value="/css/default.css" />" rel="stylesheet">
<script src="ahttps://openui5.hana.ondemand.com/resources/sap-ui-core.js"
    id="sap-ui-bootstrap"
    data-sap-ui-libs="sap.ui.commons,sap.ui.table, sap.ui.ux3"
    data-sap-ui-theme="sap_goldreflection">
</script>
<script>
    sap.ui.localResources("madrugadao");
    var view = sap.ui.view({
            id : "idmain",
            viewName : "madrugadao.shell",
            type : sap.ui.core.mvc.ViewType.JS
    });
    view.placeAt("content");
</script>