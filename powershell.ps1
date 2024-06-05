# Login to Azure
Connect-AzAccount

# Set your subscription
$subscriptionId = 'your-subscription-id'
Select-AzSubscription -SubscriptionId $subscriptionId

# Create a resource group
$resourceGroupName = 'myResourceGroup'
$location = 'westus'
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
$storageAccountName = 'mystorageaccount'
$skuName = 'Standard_LRS'
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName $skuName