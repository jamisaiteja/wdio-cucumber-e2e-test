Feature: Advance Web Interactions - Inventory

    @demo
    Scenario Outline: Demo Inventory
        Given Login to inventory web App
        Then Inventory page should list <NumberOfProducts> products
        Then Validate all products have valid price

        Examples:
            | Test ID  | NumberOfProducts |
            | INV_TC01  | 6                |

