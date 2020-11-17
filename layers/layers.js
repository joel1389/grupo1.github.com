var wms_layers = [];


        var lyr_BingMapRu_0 = new ol.layer.Tile({
            'title': 'Bing Map Ru',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=ru-ru&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_areas_publicas_1 = new ol.format.GeoJSON();
var features_areas_publicas_1 = format_areas_publicas_1.readFeatures(json_areas_publicas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_publicas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_publicas_1.addFeatures(features_areas_publicas_1);
var lyr_areas_publicas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areas_publicas_1, 
                style: style_areas_publicas_1,
                interactive: true,
                title: '<img src="styles/legend/areas_publicas_1.png" /> areas_publicas'
            });
var format_manzanos_2 = new ol.format.GeoJSON();
var features_manzanos_2 = format_manzanos_2.readFeatures(json_manzanos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanos_2.addFeatures(features_manzanos_2);
var lyr_manzanos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanos_2, 
                style: style_manzanos_2,
                interactive: true,
                title: '<img src="styles/legend/manzanos_2.png" /> manzanos'
            });
var format_predios_lp_3 = new ol.format.GeoJSON();
var features_predios_lp_3 = format_predios_lp_3.readFeatures(json_predios_lp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_predios_lp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_predios_lp_3.addFeatures(features_predios_lp_3);
var lyr_predios_lp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_predios_lp_3, 
                style: style_predios_lp_3,
                interactive: true,
                title: '<img src="styles/legend/predios_lp_3.png" /> predios_lp'
            });
var format_area_4 = new ol.format.GeoJSON();
var features_area_4 = format_area_4.readFeatures(json_area_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_4.addFeatures(features_area_4);
var lyr_area_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_4, 
                style: style_area_4,
                interactive: true,
                title: '<img src="styles/legend/area_4.png" /> area'
            });
var format_macrodistritos_5 = new ol.format.GeoJSON();
var features_macrodistritos_5 = format_macrodistritos_5.readFeatures(json_macrodistritos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macrodistritos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macrodistritos_5.addFeatures(features_macrodistritos_5);
var lyr_macrodistritos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macrodistritos_5, 
                style: style_macrodistritos_5,
                interactive: true,
                title: '<img src="styles/legend/macrodistritos_5.png" /> macrodistritos'
            });
var format_distritos_6 = new ol.format.GeoJSON();
var features_distritos_6 = format_distritos_6.readFeatures(json_distritos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_6.addFeatures(features_distritos_6);
var lyr_distritos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritos_6, 
                style: style_distritos_6,
                interactive: true,
                title: '<img src="styles/legend/distritos_6.png" /> distritos'
            });
var format_barrios_7 = new ol.format.GeoJSON();
var features_barrios_7 = format_barrios_7.readFeatures(json_barrios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_7.addFeatures(features_barrios_7);
var lyr_barrios_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrios_7, 
                style: style_barrios_7,
                interactive: true,
                title: '<img src="styles/legend/barrios_7.png" /> barrios'
            });
var format_vias_8 = new ol.format.GeoJSON();
var features_vias_8 = format_vias_8.readFeatures(json_vias_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_8.addFeatures(features_vias_8);
var lyr_vias_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vias_8, 
                style: style_vias_8,
                interactive: true,
                title: '<img src="styles/legend/vias_8.png" /> vias'
            });
var format_salud_9 = new ol.format.GeoJSON();
var features_salud_9 = format_salud_9.readFeatures(json_salud_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_salud_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_salud_9.addFeatures(features_salud_9);
var lyr_salud_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_salud_9, 
                style: style_salud_9,
                interactive: true,
                title: '<img src="styles/legend/salud_9.png" /> salud'
            });
var format_seguridad_10 = new ol.format.GeoJSON();
var features_seguridad_10 = format_seguridad_10.readFeatures(json_seguridad_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seguridad_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seguridad_10.addFeatures(features_seguridad_10);
var lyr_seguridad_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seguridad_10, 
                style: style_seguridad_10,
                interactive: true,
                title: '<img src="styles/legend/seguridad_10.png" /> seguridad'
            });
var format_plazas_parques_11 = new ol.format.GeoJSON();
var features_plazas_parques_11 = format_plazas_parques_11.readFeatures(json_plazas_parques_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plazas_parques_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plazas_parques_11.addFeatures(features_plazas_parques_11);
var lyr_plazas_parques_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plazas_parques_11, 
                style: style_plazas_parques_11,
                interactive: true,
                title: '<img src="styles/legend/plazas_parques_11.png" /> plazas_parques'
            });
var format_bancos_12 = new ol.format.GeoJSON();
var features_bancos_12 = format_bancos_12.readFeatures(json_bancos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bancos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bancos_12.addFeatures(features_bancos_12);
var lyr_bancos_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bancos_12, 
                style: style_bancos_12,
                interactive: true,
                title: '<img src="styles/legend/bancos_12.png" /> bancos'
            });
var format_farmacias_13 = new ol.format.GeoJSON();
var features_farmacias_13 = format_farmacias_13.readFeatures(json_farmacias_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmacias_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmacias_13.addFeatures(features_farmacias_13);
var lyr_farmacias_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_farmacias_13, 
                style: style_farmacias_13,
                interactive: true,
                title: '<img src="styles/legend/farmacias_13.png" /> farmacias'
            });
var format_mercados_lp_14 = new ol.format.GeoJSON();
var features_mercados_lp_14 = format_mercados_lp_14.readFeatures(json_mercados_lp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mercados_lp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mercados_lp_14.addFeatures(features_mercados_lp_14);
var lyr_mercados_lp_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mercados_lp_14, 
                style: style_mercados_lp_14,
                interactive: true,
                title: '<img src="styles/legend/mercados_lp_14.png" /> mercados_lp'
            });
var format_supermercados_15 = new ol.format.GeoJSON();
var features_supermercados_15 = format_supermercados_15.readFeatures(json_supermercados_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supermercados_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supermercados_15.addFeatures(features_supermercados_15);
var lyr_supermercados_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_supermercados_15, 
                style: style_supermercados_15,
                interactive: true,
                title: '<img src="styles/legend/supermercados_15.png" /> supermercados'
            });
var format_ferias_16 = new ol.format.GeoJSON();
var features_ferias_16 = format_ferias_16.readFeatures(json_ferias_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferias_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferias_16.addFeatures(features_ferias_16);
var lyr_ferias_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ferias_16, 
                style: style_ferias_16,
                interactive: true,
                title: '<img src="styles/legend/ferias_16.png" /> ferias'
            });

lyr_BingMapRu_0.setVisible(true);lyr_areas_publicas_1.setVisible(true);lyr_manzanos_2.setVisible(true);lyr_predios_lp_3.setVisible(true);lyr_area_4.setVisible(true);lyr_macrodistritos_5.setVisible(true);lyr_distritos_6.setVisible(true);lyr_barrios_7.setVisible(true);lyr_vias_8.setVisible(true);lyr_salud_9.setVisible(true);lyr_seguridad_10.setVisible(true);lyr_plazas_parques_11.setVisible(true);lyr_bancos_12.setVisible(true);lyr_farmacias_13.setVisible(true);lyr_mercados_lp_14.setVisible(true);lyr_supermercados_15.setVisible(true);lyr_ferias_16.setVisible(true);
var layersList = [lyr_BingMapRu_0,lyr_areas_publicas_1,lyr_manzanos_2,lyr_predios_lp_3,lyr_area_4,lyr_macrodistritos_5,lyr_distritos_6,lyr_barrios_7,lyr_vias_8,lyr_salud_9,lyr_seguridad_10,lyr_plazas_parques_11,lyr_bancos_12,lyr_farmacias_13,lyr_mercados_lp_14,lyr_supermercados_15,lyr_ferias_16];
lyr_areas_publicas_1.set('fieldAliases', {'tipo': 'tipo', 'nom_ub': 'nom_ub', 'x': 'x', 'y': 'y', 'sup_m2': 'sup_m2', });
lyr_manzanos_2.set('fieldAliases', {'gml_id': 'gml_id', 'objectid': 'objectid', 'shape_leng': 'shape_leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_predios_lp_3.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_area_4.set('fieldAliases', {'tipo': 'tipo', });
lyr_macrodistritos_5.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_distritos_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_barrios_7.set('fieldAliases', {'gml_id': 'gml_id', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'nom_otb': 'nom_otb', 'sub_alcald': 'sub_alcald', 'estado': 'estado', 'numero': 'numero', 'distrito': 'distrito', 'codigo': 'codigo', 'shape_leng': 'shape_leng', 'atlas': 'atlas', 'mostrar': 'mostrar', 'correla': 'correla', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'tipo': 'tipo', });
lyr_vias_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'OBJECTID_5': 'OBJECTID_5', 'GDBSANVI': 'GDBSANVI', 'CODIFICA': 'CODIFICA', 'GDBSNOVI': 'GDBSNOVI', 'COD_MAT': 'COD_MAT', 'COD_VIAL': 'COD_VIAL', 'GDBSGERA': 'GDBSGERA', 'GDBSCALZ': 'GDBSCALZ', 'GDBSTIVI': 'GDBSTIVI', 'GDBSDESN': 'GDBSDESN', 'OM': 'OM', 'ruteo': 'ruteo', 'Shape_Le_1': 'Shape_Le_1', 'RuteoIDA': 'RuteoIDA', 'Shape_Le_2': 'Shape_Le_2', });
lyr_salud_9.set('fieldAliases', {'gml_id': 'gml_id', 'objectid_2': 'objectid_2', 'objectid_3': 'objectid_3', 'objectid': 'objectid', 'cod_cs_1': 'cod_cs_1', 'establecim': 'establecim', 'idtipoaten': 'idtipoaten', 'ni_at_i': 'ni_at_i', 'idtiposect': 'idtiposect', 'sub__sec': 'sub__sec', 'h__at': 'h__at', 'idnivel': 'idnivel', 'direccion': 'direccion', 'bar_zon': 'bar_zon', 'fuente': 'fuente', 'observacio': 'observacio', 'nombre': 'nombre', 'md': 'md', 'dst': 'dst', 'usuario': 'usuario', 'fechaactua': 'fechaactua', 'observac_1': 'observac_1', 'tipo': 'tipo', });
lyr_seguridad_10.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Zona': 'Zona', 'Tipo': 'Tipo', 'distrito': 'distrito', 'fechaActua': 'fechaActua', });
lyr_plazas_parques_11.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Zona': 'Zona', 'IdTipo': 'IdTipo', 'Tipo': 'Tipo', 'distrito': 'distrito', 'fechaActua': 'fechaActua', });
lyr_bancos_12.set('fieldAliases', {'CODIGO': 'CODIGO', 'CODIGO_1': 'CODIGO_1', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'TELEFONO_1': 'TELEFONO_1', 'TELEFONO_2': 'TELEFONO_2', 'TELEFONO_3': 'TELEFONO_3', 'FAX': 'FAX', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', 'TIPO_OFIC': 'TIPO_OFIC', 'DESCR_OFIC': 'DESCR_OFIC', 'ENCARGADO': 'ENCARGADO', 'FECHA_FUND': 'FECHA_FUND', 'CASILL_OFC': 'CASILL_OFC', 'TARJ_ACEP': 'TARJ_ACEP', 'HORARIO_AT': 'HORARIO_AT', 'EMAIL': 'EMAIL', 'PAG_WEB': 'PAG_WEB', 'SERVICIOS': 'SERVICIOS', 'REV': 'REV', 'CLAVE': 'CLAVE', 'BAN': 'BAN', });
lyr_farmacias_13.set('fieldAliases', {'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'TELEFONO_1': 'TELEFONO_1', 'TELEFONO_2': 'TELEFONO_2', 'TELEFONO_3': 'TELEFONO_3', 'FAX': 'FAX', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', 'NIVEL': 'NIVEL', 'ADMINISTR': 'ADMINISTR', 'HORARIO_AT': 'HORARIO_AT', 'RESPONSABL': 'RESPONSABL', 'EMAIL': 'EMAIL', 'PAG_WEB': 'PAG_WEB', 'RED_SALUD': 'RED_SALUD', 'C_MAT': 'C_MAT', 'C_OTROS': 'C_OTROS', 'REV': 'REV', 'CLAVE': 'CLAVE', 'FAR': 'FAR', });
lyr_mercados_lp_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Direccion': 'Direccion', 'Municipio': 'Municipio', 'codigo': 'codigo', 'departamen': 'departamen', 'provincia': 'provincia', 'ciudad': 'ciudad', 'Y': 'Y', 'X': 'X', });
lyr_supermercados_15.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Y': 'Y', 'X': 'X', });
lyr_ferias_16.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Y': 'Y', 'X': 'X', });
lyr_areas_publicas_1.set('fieldImages', {'tipo': 'TextEdit', 'nom_ub': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'sup_m2': 'TextEdit', });
lyr_manzanos_2.set('fieldImages', {'gml_id': 'TextEdit', 'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_predios_lp_3.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', });
lyr_area_4.set('fieldImages', {'tipo': 'TextEdit', });
lyr_macrodistritos_5.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'LyrHandle': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', });
lyr_distritos_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_barrios_7.set('fieldImages', {'gml_id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'nom_otb': 'TextEdit', 'sub_alcald': 'TextEdit', 'estado': 'TextEdit', 'numero': 'TextEdit', 'distrito': 'TextEdit', 'codigo': 'TextEdit', 'shape_leng': 'TextEdit', 'atlas': 'TextEdit', 'mostrar': 'TextEdit', 'correla': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'tipo': 'Range', });
lyr_vias_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'OBJECTID_5': 'TextEdit', 'GDBSANVI': 'TextEdit', 'CODIFICA': 'TextEdit', 'GDBSNOVI': 'TextEdit', 'COD_MAT': 'TextEdit', 'COD_VIAL': 'TextEdit', 'GDBSGERA': 'TextEdit', 'GDBSCALZ': 'TextEdit', 'GDBSTIVI': 'TextEdit', 'GDBSDESN': 'TextEdit', 'OM': 'TextEdit', 'ruteo': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'RuteoIDA': 'TextEdit', 'Shape_Le_2': 'TextEdit', });
lyr_salud_9.set('fieldImages', {'gml_id': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid_3': 'TextEdit', 'objectid': 'TextEdit', 'cod_cs_1': 'TextEdit', 'establecim': 'TextEdit', 'idtipoaten': 'TextEdit', 'ni_at_i': 'TextEdit', 'idtiposect': 'TextEdit', 'sub__sec': 'TextEdit', 'h__at': 'TextEdit', 'idnivel': 'TextEdit', 'direccion': 'TextEdit', 'bar_zon': 'TextEdit', 'fuente': 'TextEdit', 'observacio': 'TextEdit', 'nombre': 'TextEdit', 'md': 'TextEdit', 'dst': 'TextEdit', 'usuario': 'TextEdit', 'fechaactua': 'TextEdit', 'observac_1': 'TextEdit', 'tipo': 'TextEdit', });
lyr_seguridad_10.set('fieldImages', {'ID': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Zona': 'TextEdit', 'Tipo': 'TextEdit', 'distrito': 'TextEdit', 'fechaActua': 'TextEdit', });
lyr_plazas_parques_11.set('fieldImages', {'ID': 'Range', 'Nombre': 'TextEdit', 'Zona': 'TextEdit', 'IdTipo': 'TextEdit', 'Tipo': 'TextEdit', 'distrito': 'TextEdit', 'fechaActua': 'TextEdit', });
lyr_bancos_12.set('fieldImages', {'CODIGO': 'TextEdit', 'CODIGO_1': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TELEFONO_1': 'TextEdit', 'TELEFONO_2': 'TextEdit', 'TELEFONO_3': 'TextEdit', 'FAX': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_OFIC': 'TextEdit', 'DESCR_OFIC': 'TextEdit', 'ENCARGADO': 'TextEdit', 'FECHA_FUND': 'DateTime', 'CASILL_OFC': 'TextEdit', 'TARJ_ACEP': 'TextEdit', 'HORARIO_AT': 'TextEdit', 'EMAIL': 'TextEdit', 'PAG_WEB': 'TextEdit', 'SERVICIOS': 'TextEdit', 'REV': 'TextEdit', 'CLAVE': 'TextEdit', 'BAN': 'TextEdit', });
lyr_farmacias_13.set('fieldImages', {'CODIGO': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TELEFONO_1': 'TextEdit', 'TELEFONO_2': 'TextEdit', 'TELEFONO_3': 'TextEdit', 'FAX': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', 'NIVEL': 'TextEdit', 'ADMINISTR': 'TextEdit', 'HORARIO_AT': 'TextEdit', 'RESPONSABL': 'TextEdit', 'EMAIL': 'TextEdit', 'PAG_WEB': 'TextEdit', 'RED_SALUD': 'TextEdit', 'C_MAT': 'TextEdit', 'C_OTROS': 'TextEdit', 'REV': 'TextEdit', 'CLAVE': 'TextEdit', 'FAR': 'TextEdit', });
lyr_mercados_lp_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Direccion': 'TextEdit', 'Municipio': 'TextEdit', 'codigo': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'ciudad': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_supermercados_15.set('fieldImages', {'Id': 'Range', 'NOMBRE': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_ferias_16.set('fieldImages', {'Id': 'Range', 'NOMBRE': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_areas_publicas_1.set('fieldLabels', {'tipo': 'no label', 'nom_ub': 'no label', 'x': 'no label', 'y': 'no label', 'sup_m2': 'no label', });
lyr_manzanos_2.set('fieldLabels', {'gml_id': 'no label', 'objectid': 'no label', 'shape_leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_predios_lp_3.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_area_4.set('fieldLabels', {'tipo': 'no label', });
lyr_macrodistritos_5.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_distritos_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_barrios_7.set('fieldLabels', {'gml_id': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'nom_otb': 'no label', 'sub_alcald': 'no label', 'estado': 'no label', 'numero': 'no label', 'distrito': 'no label', 'codigo': 'no label', 'shape_leng': 'no label', 'atlas': 'no label', 'mostrar': 'no label', 'correla': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'tipo': 'no label', });
lyr_vias_8.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_2': 'no label', 'Shape_Leng': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'OBJECTID_5': 'no label', 'GDBSANVI': 'no label', 'CODIFICA': 'no label', 'GDBSNOVI': 'no label', 'COD_MAT': 'no label', 'COD_VIAL': 'no label', 'GDBSGERA': 'no label', 'GDBSCALZ': 'no label', 'GDBSTIVI': 'no label', 'GDBSDESN': 'no label', 'OM': 'no label', 'ruteo': 'no label', 'Shape_Le_1': 'no label', 'RuteoIDA': 'no label', 'Shape_Le_2': 'no label', });
lyr_salud_9.set('fieldLabels', {'gml_id': 'no label', 'objectid_2': 'no label', 'objectid_3': 'no label', 'objectid': 'no label', 'cod_cs_1': 'no label', 'establecim': 'no label', 'idtipoaten': 'no label', 'ni_at_i': 'no label', 'idtiposect': 'no label', 'sub__sec': 'no label', 'h__at': 'no label', 'idnivel': 'no label', 'direccion': 'no label', 'bar_zon': 'no label', 'fuente': 'no label', 'observacio': 'no label', 'nombre': 'no label', 'md': 'no label', 'dst': 'no label', 'usuario': 'no label', 'fechaactua': 'no label', 'observac_1': 'no label', 'tipo': 'no label', });
lyr_seguridad_10.set('fieldLabels', {'ID': 'no label', 'Nombre': 'no label', 'Direccion': 'no label', 'Zona': 'no label', 'Tipo': 'no label', 'distrito': 'no label', 'fechaActua': 'no label', });
lyr_plazas_parques_11.set('fieldLabels', {'ID': 'no label', 'Nombre': 'no label', 'Zona': 'no label', 'IdTipo': 'no label', 'Tipo': 'no label', 'distrito': 'no label', 'fechaActua': 'no label', });
lyr_bancos_12.set('fieldLabels', {'CODIGO': 'no label', 'CODIGO_1': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'TELEFONO_1': 'no label', 'TELEFONO_2': 'no label', 'TELEFONO_3': 'no label', 'FAX': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', 'TIPO_OFIC': 'no label', 'DESCR_OFIC': 'no label', 'ENCARGADO': 'no label', 'FECHA_FUND': 'no label', 'CASILL_OFC': 'no label', 'TARJ_ACEP': 'no label', 'HORARIO_AT': 'no label', 'EMAIL': 'no label', 'PAG_WEB': 'no label', 'SERVICIOS': 'no label', 'REV': 'no label', 'CLAVE': 'no label', 'BAN': 'no label', });
lyr_farmacias_13.set('fieldLabels', {'CODIGO': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'TELEFONO_1': 'no label', 'TELEFONO_2': 'no label', 'TELEFONO_3': 'no label', 'FAX': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', 'NIVEL': 'no label', 'ADMINISTR': 'no label', 'HORARIO_AT': 'no label', 'RESPONSABL': 'no label', 'EMAIL': 'no label', 'PAG_WEB': 'no label', 'RED_SALUD': 'no label', 'C_MAT': 'no label', 'C_OTROS': 'no label', 'REV': 'no label', 'CLAVE': 'no label', 'FAR': 'no label', });
lyr_mercados_lp_14.set('fieldLabels', {'OBJECTID': 'no label', 'Nombre': 'no label', 'Direccion': 'no label', 'Municipio': 'no label', 'codigo': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'ciudad': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_supermercados_15.set('fieldLabels', {'Id': 'header label', 'NOMBRE': 'no label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_ferias_16.set('fieldLabels', {'Id': 'no label', 'NOMBRE': 'no label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_ferias_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});