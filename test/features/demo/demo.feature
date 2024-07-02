Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | Test ID   | SearchItem | ExpectedURL           |
            | DEMO_TC01 | WDIO       | https://webdriver.io/ |

