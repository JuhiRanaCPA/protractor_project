@NotReady
# Feature: Search for the products
#     As a user
#     I want to search for a product

#     Scenario Outline: Search for the products with results
#         Given User goes to MyRockwell Home Page
#         When A user searches for a <Product>
#         And Clicks to enter
#         And A user clicks on the Products tab
#         Then There should be atleast <Count> result
#         And First search result should have status <Status>
#         And search result should have Family <Family>
#         And search result should have first button <button1>
#         And search result should have second button <button2>
#         And search result should have first link <link1>
#         And search result should have second link <link2>
#         Then Search <Suggestion> should be displayed


#         Examples:
#             | Product     | Count | Status | Family                                | button1    | button2   | link1              | link2               | Suggestion |
#             | metal       | 5     | Active | 42CM 18 mm Metal Sensors & Switches   | ADD TO BOM | CONFIGURE | Specifications     | X                   | Yes        |
#             | 1756-L7RMEN | 1     | Active | ControlLogix Programmable Controllers | ADD TO BOM | X         | User Manual        | Add to Repair Quote | X          |
#             | 1756        | 1     | Active | IEC Load Switches Motor Control       | ADD TO BOM | X         | Installation Guide | X                   | Yes        |

# # X in Examples represent no element is expected (button/text etc)
