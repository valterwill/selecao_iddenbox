# -*- coding: utf-8 -*-
import sys, os
import re

def clear_cls():
	os.system('cls' if os.name=='nt' else 'clear')

def restrict(value, type):
	if type == 'N':
		if value>=1 and value<=100:
			return True
		else:
			print "Erro, a restrição não foi satisfeita(1<=N<=100). \
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

def test(name):	
	if re.match("^[_.][0-9]+[a-zA-Z]*[_]?$", name):
		return "VALIDO"
	return "INVALIDO"

def inputs(names):
	print "Entradas\n", len(names)
	for name in names:
		print name

def outputs(names):
	print "\nSaida\n"
	for name in names:
		print test(name)

def main():
	clear_cls()
	n_names = input_("Digite o número de usuarios: ","N")
	names = []
	for n in xrange(0,n_names):
		names.append(raw_input("Digite o nome do %sº usúario: "%(n+1)))
	print "Nome de Usuário Válido"
	inputs(names)
	outputs(names)

if __name__ == '__main__': 
    main()