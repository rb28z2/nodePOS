Node POS Requirements

- Basic layout UI
    - Menu tabs

- Order input page
    - Order list
    - Item list
    - Calculate running totals
    - Categorize item buttons
    - Dish modification
        - +/- spicy, allergy, etc
		
- convert hard coded pixel measurements to relative measurements as needed

- New order system
    - Tables tab 
        - place tables graphically within browser window
        - save coordinates of tables for later use
        - edit options for tables
            - Round
            - Square
            - change size
    - Takeout/Delivery tab
        - Allow entry of new customers/orders
            - name/phone number
            - Address if necessary
            - Time stamp when orders arrive
        - ETA time for order
            - 5 minute intervals or manual entry
            - Time stamp plus desired order finish time
            - Ex. 5:00pm + 30min ETA = 5:30pm completion
        - Allow sorting of orders
            - Time arrived
            - Eta to finish
            - Numerically phone number
            - Alphabetically by name

    - End transaction
        - Apply discounts/gratuities
        - Split bill
            - Evenly or by items
        - Allow split tender
            - Visa + cash etc.
        - Choose payment method
        - Print option

    - Printers
        - All orders sent to kitchen must be sent in chinese or set to desired language based on json file
        - For orders
            - Include table #/ order name or phone number
                - Takeout and delivery orders should be time stamped
                - Include ETA
            - Include list of items including duplicates or group duplicates together
        - For receipts
            - Include GST #
            - Include server name/id
            - Include list of items ordered
            - Subtotal, tax, total

    - End of day totals
        - Calculate total sales
            - Show GST
        - Show sales totals grouped by payment method
            - Visa, MC, debit, cash

    - User login
        - Password protection
        - admin/regular users
        - Admin options
            - Change tax rate
            - add/remove users
            - Reprint receipts 

    - Data analytics
        - Cost of goods sold
        - \# of items sold
        - Daily totals
        - Weekly totals
        - Monthly totals
        - Graphs
        - Most popular items
        - Least popular items?

