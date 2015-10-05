# -*- coding: utf-8 -*-
import sys, os

def clear_cls():
	os.system('cls' if os.name=='nt' else 'clear')

def restrict(value, type):
	if type == 'T':
		if value>=1 and value<=10:
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=T<=10). \
			       Aperte qualquer tecla para digitar novamente."
	elif type == 'N':
		if value>=1 and value<=pow(10,5):
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=N<=10⁵). \
			       Aperte qualquer tecla para digitar novamente."
	else:
		result = [(lambda elemment: elemment>=1 and elemment<=2*pow(10,4))(elemment) for elemment in value]
		if not False in result:
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=Ai<=2*10⁴). \
			       Aperte qualquer tecla para digitar novamente."
	return False

def input_(message, type):
	value = None
	while True:
		try:
			value = int(raw_input(message))
			if restrict(value, type):
				break
			else:
				c = sys.stdin.read(1)
		except ValueError:
			print "Erro, o elemento digitado não é um número inteiro. \
			       Aperte qualquer tecla para digitar novamente."
			c = sys.stdin.read(1)
		clear_cls()
	clear_cls()
	return value

def input_array(message, n_elemments):
	value = None
	array = []
	while True:
		elemments = raw_input(message)
		array = elemments.split()
		if len(array) == n_elemments:
			try:
				array = [int(x) for x in array]
				if restrict(array,"A"):
					break
				else:
					c = sys.stdin.read(1)
			except ValueError:
				print "Erro, um dos elementos digitados não é um número inteiro.\
					   Aperte qualquer tecla para digitar novamente."
				c = sys.stdin.read(1)
		else:
			print "Erro, o numero de elementos do array difere de %s. \
				   Aperte qualquer tecla para digitar novamente os elementos." %(n_elemments)
			c = sys.stdin.read(1)
		clear_cls()
	clear_cls()
	return array
	
'''
Função responsavel por checar se existe um i tal que A1+A2...Ai-1 = Ai+1+Ai+2 … AN
'''
def test(case):	
	if True in [(lambda i: sum(case[:i]) == sum(case[i+1:len(case)]))(i) for i, val in enumerate(case)]: return "SIM"	
	return 	"Não"


def inputs(cases):
	print "Entradas\n", len(cases)
	for case in cases:
		print len(case),"\n", " ".join([str(x) for x in case] )

def outputs(cases):
	print "\nSaidas"
	for case in cases:
		print test(case)

def main():
	clear_cls()
	n_cases = input_("Digite o número de casos de teste: ", "T")
	cases = []    
	for i in xrange(0,n_cases):
		n_elemments = input_("Digite o número de elementos do array para o %sº caso de teste: " %(i+1),"N")
		cases.append(input_array("Digite os elementos separados por espaço: ", n_elemments))
	print "Bruce e o Array"
	inputs(cases)
	outputs(cases)

if __name__ == '__main__': 
    main()