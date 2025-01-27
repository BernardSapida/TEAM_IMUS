import pandas as pd

# Load the Excel file
excel_file_path = "FORMATED SORTED.xlsx"  # Replace with your file path
df = pd.read_excel(excel_file_path)

# Convert the DataFrame to JSON
json_output = df.to_json(orient="records", indent=4)

# Save to a file or print
output_file = "output.json"
with open(output_file, "w") as file:
    file.write(json_output)

print(json_output)
