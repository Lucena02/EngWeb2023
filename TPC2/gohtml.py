import json

def ordCidade(c):
    return c['nome']

f=open("mapa.json")
mapa=json.load(f)
cidades = mapa['cidades']
connects = mapa['ligações']

cidades.sort(key=ordCidade)

cityNames={}
for c in cidades:
    cityNames[c['id']] = c['nome']

def cidadesT():

    pagHTML = ""
    for c in cidades:
        pagHTML += f"""
        <li>
            <a href="/{c['id']}">{c['nome']}</a>
        </li>
        """ 

    return pagHTML


def inicio():
    inicio = open("./pags/index.html", "w")
    inicio.write("<!DOCTYPE html>\n")
    inicio.write("\t<head>\n")
    inicio.write("\t\t<title>Início</title>\n")
    inicio.write("\t</head>\n")

    inicio.write("\t<body>\n")

    inicio.write(cidadesT())


    inicio.write("\t</body>\n")


def geraPags():

    for c in cidades :
        cityHTML = ""
        cityHTML += f"""
                        <a name = {c['id']}></a>
                        <h3>{c['nome']}</h3>
                        <p><b>População: </b>{c['população']}</p>
                        <p><b>Descrição: </b>{c['descrição']}</p>
                        <p><b>Distrito: </b>{c['distrito']}</p>
                        <p><b>Ligações: </b>

                        <ul/>
        """

        cityHTML += f"""
                                <p>
                                    Possiveis destinos a partir deste local
                                </p>
                    """
        for lig in connects:
            if lig['origem'] == c['id']:
                cityHTML += f"""
                                <li>
                                    <a href="{lig['destino']}">{cityNames[lig['destino']]}</a> 
                                </li>
                """

        cityHTML += f"""
                                <p>
                                    Possiveis origens para chegar a este local
                                </p>
                    """

        for lig in connects:
            if lig['destino'] == c['id']:
                cityHTML += f"""
                                <li>
                                    <a href="{lig['origem']}">{cityNames[lig['origem']]}</a>
                                </li>
                """



        pag = open("./pags/" + c['id'] + ".html", "w")
        pag.write(cityHTML)


inicio()
geraPags()