provider "azurerm" {
  features {}
}

variable "location" {
  description = "Location for all resources."
  default     = "West US"
}

variable "storage_account_name" {
  description = "Name of the Storage Account"
}

variable "storage_account_type" {
  description = "Defines the type of Storage Account to be created"
  default     = "Standard_LRS"
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = var.storage_account_type

  tags = {
    environment = "staging"
  }
}

resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.location
}