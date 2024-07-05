Feature: Advance Web Interactions - Inventory

    @demo @debug
    Scenario Outline:<TestID>:<Demo Inventory>
        Given As a standard user I Login to inventory web App
            | userType | username                |
            | StdUser  | standard_user           |
            | ProUser  | problem_user            |
            | PerfUser | performance_glitch_user |
        Then Inventory page should list <NumberOfProducts> products
        Then Validate all products have valid price

        Examples:
            | TestID  | NumberOfProducts |
            | INV_TC01 | 6                |

