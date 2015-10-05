# -*- coding: utf-8 -*-
import sys, os
import itertools

def clear_cls():
	os.system('cls' if os.name=='nt' else 'clear')

def restrict(value, type):
	if type == 'N':
		if value>=1 and value<=pow(10,5):
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=N<=10⁵). \
			       Aperte qualquer tecla para digitar novamente."
	elif type == 'K':
		if value>=1 and value<=pow(10,9):
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=N<=10⁵). \
			       Aperte qualquer tecla para digitar novamente."
	else:
		result = [(lambda elemment: elemment>=1 and elemment<=pow(10,9))(elemment) for elemment in value]
		if not False in result:
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=P<=10⁹). \
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
	

def test(money, price_toys, n):	
	lists_toys = [list(toys) for toys in itertools.combinations(price_toys,n) if sum(toys) <= money]
	if lists_toys: return max([len(toys) for toys in lists_toys])
	return test(money, price_toys,n-1)

def inputs(n_toys, money, price_toys):
	print "Entradas\n", n_toys, " ", money
	print " ".join([str(x) for x in price_toys] )

def outputs(money, price_toys):
	print "\nSaida\n"
	print test(money, price_toys, len(price_toys))

def main():
	clear_cls()
	n_toys, money = input_array("Digite o número de brinquedos que deseja comprar e o valor que você pode gastar na loja separados por espaço: ",2)
	price_toys = input_array("Digite os preços dos %s briquedos separados por espaço: ", n_toys)
	print "Marco e os Brinquedos"
	inputs(n_toys, money, price_toys)
	outputs(money, price_toys)

if __name__ == '__main__': 
    main()