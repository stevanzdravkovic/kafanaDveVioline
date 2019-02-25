<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

 <xsl:template match="/rss">
     <html>
	    <body bgcolor="black">
		   <h1 style="color:purple; text-align:center;">RSS</h1>
		   <table style="border:2px solid purple; color:white;width:1000px;
		   margin:10px auto;" border="2">
		     <tr>
			     <th>Naslov</th>
				 <th>Opis</th>
				 <th>Link</th>
			 </tr>
		   <xsl:for-each select="channel/item">
		      <tr>
			     <td><xsl:value-of select="title"/></td>
			  <td><xsl:value-of select="description"/></td>
			  <td><xsl:value-of select="link"/></td>
			  </tr>
		   
		   </xsl:for-each>
		   </table>
		
		
		</body>
	 </html>
 
 
 
 </xsl:template>

</xsl:stylesheet>