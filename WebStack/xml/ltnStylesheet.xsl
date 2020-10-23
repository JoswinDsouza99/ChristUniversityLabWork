<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
            <head>
            
            </head>
            <body>
                <h1 style="text-align:center; margin-bottom:50px;">Latest Trending News</h1>
                
                <div>
                    <h2 style="text-align:center;">List of News</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#E5E4E2">
                            <th style="text-align:left">Category</th>
                            <th style="text-align:left">Headlines</th>
                            <th style="text-align:left">Date</th>
                        </tr>
                        <xsl:for-each select="news/Content">
                                <tr>
                                    <td>
                                        <xsl:value-of select="Category"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Headlines"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Date"/>
                                    </td>
                                </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <div>
                    <h2 style="text-align:center;">List of all Users</h2>
                    <table border="2"  align="center">
                        <tr bgcolor="#E5E4E2">
                            <th style="text-align:left">User ID</th>
                            <th style="text-align:left">Name</th>
                            <th style="text-align:left">Email</th>
                        </tr>
                        <xsl:for-each select="news/User">
                            <tr>
                                <td>
                                    <xsl:value-of select="U_id"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Email"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	</xsl:template>
</xsl:stylesheet>