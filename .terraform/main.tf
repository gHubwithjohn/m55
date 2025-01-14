provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "m55" {
  name     = "m55-resources"
  location = "East US"
}

resource "azurerm_app_service_plan" "m55" {
  name                = "m55-service-plan"
  location            = azurerm_resource_group.m55.location
  resource_group_name = azurerm_resource_group.m55.name
  sku {
    tier = "Standard"
    size = "S1"
  }
}

resource "azurerm_web_app" "m55" {
  name                = "m55-web-app"
  location            = azurerm_resource_group.m55.location
  resource_group_name = azurerm_resource_group.m55.name
  app_service_plan_id = azurerm_app_service_plan.m55.id
  site_config {
    linux_fx_version = "NODE|16-lts"
  }
}
