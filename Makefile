SHELL := /bin/sh

COMPOSE ?= docker compose
SERVICE := museo
PORT ?= 8080

.DEFAULT_GOAL := help

.PHONY: help install dev lint test build up down restart logs ps clean rebuild

help: ## Mostra i comandi disponibili
	@awk 'BEGIN {FS = ":.*## "; printf "Museo Scientifico Virtuale\n\n"} /^[a-zA-Z_-]+:.*## / {printf "  %-12s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Installa le dipendenze Node
	npm ci

dev: ## Avvia Vite in modalità sviluppo
	npm run dev

lint: ## Esegue ESLint
	npm run lint

test: lint build ## Esegue le verifiche disponibili

build: ## Costruisce l'immagine Docker
	PORT=$(PORT) $(COMPOSE) build $(SERVICE)

up: ## Avvia il museo su http://localhost:PORT
	PORT=$(PORT) $(COMPOSE) up -d $(SERVICE)
	@printf "\nMuseo disponibile su http://localhost:%s\n" "$(PORT)"

down: ## Arresta e rimuove i container
	PORT=$(PORT) $(COMPOSE) down

restart: down up ## Riavvia il container

logs: ## Segue i log del container
	PORT=$(PORT) $(COMPOSE) logs -f $(SERVICE)

ps: ## Mostra lo stato dei servizi
	PORT=$(PORT) $(COMPOSE) ps

rebuild: down build up ## Ricostruisce e riavvia il museo

clean: ## Rimuove container, immagini locali e output Vite
	PORT=$(PORT) $(COMPOSE) down --rmi local --remove-orphans
	rm -rf dist
