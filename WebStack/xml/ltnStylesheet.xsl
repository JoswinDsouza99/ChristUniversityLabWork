<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
            <head>
                <style>
            div
            {
                text-align:center;
                height:500px; 
                width:48%;
            }
            td,th
            {
                font-size:larger;
                padding:20px;
                text-align:center !important;
            }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;">Latest Trending News</h1>
                
                <div style="float:left;">
                    <h2>List of News</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Category</th>
                            <th style="text-align:left">Headlines</th>
                            <th style="text-align:left">Date</th>
                        </tr>
                        <xsl:for-each select="p:news/p:Content">
                                <tr>
                                    <td>
                                        <xsl:value-of select="p:Category"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="p:Headlines"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="p:Date"/>
                                    </td>
                                </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <div style="float:left;height:550px;">
                    <h2>List of all Users</h2>
                    <table border="2"  align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Employee Name</th>
                            <th style="text-align:left">Salary</th>
                        </tr>
                        <xsl:for-each select="p:news/p:User">
                            <tr>
                                <td>
                                    <xsl:value-of select="p:U_id"/>
                                </td>
                                <td>
                                    <xsl:value-of select="p:Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="p:Email"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>