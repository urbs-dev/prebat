import { PATH_TO_FILES,  } from 'Core/utils'
import { type Workbook, type Worksheet } from "exceljs";
import JSZip from 'jszip'
import Excel from 'exceljs'


const getWorkbook = async (name: string) => {
    const pathTofile = `${PATH_TO_FILES}${name}`
    const OperationSheet = new Excel.Workbook();
    return await OperationSheet.xlsx.readFile(pathTofile)
}

const copyRows = async (worksheet: Worksheet, newSheet: Worksheet, columns: number[] ) => {
    const HEADER_COLUMN = [1,2,3]    

    worksheet.eachRow( async (row, rowNumber) => {
        const newRow = newSheet.getRow(rowNumber)
        newRow.height = row.height
        HEADER_COLUMN.map( async (col, i) => {
            if ( row.getCell(col).type == 6 ) newRow.getCell(i+1).value = row.getCell(col).result // 6 is formula
            else newRow.getCell(i+1).value           = row.getCell(col).value
            newRow.getCell(i+1).style           = row.getCell(col).style
            newRow.getCell(i+1).model           = row.getCell(col).model
        })
        columns.map( async (col, i) => {
            if ( row.getCell(col).type == 6 ) newRow.getCell(i+4).value = row.getCell(col).result // 6 is formula
            else newRow.getCell(i+4).value          = row.getCell(col).value
            newRow.getCell(i+4).style           = row.getCell(col).style
            newRow.getCell(i+4).fill            = row.getCell(col).fill
        })
    })
}
const copyColumnsProperties = async (worksheet: Worksheet, newSheet: Worksheet,columns: number[]) => {
    const columnsToCopy = [1,2,3, ...columns]
    columnsToCopy.map( async (col, i) => {
        const targetCol = newSheet.getColumn(i+1)
        const sourceCol = worksheet.getColumn(col)
        targetCol.width = sourceCol.width
    })
}

export const copyOperation = async (worksheet: Worksheet, name:string, columns: number[]) => {
    const operationsWorkbook = await getWorkbook(name)
    const operationsWorksheet = operationsWorkbook.getWorksheet('Données')
    if (!operationsWorksheet) return
    
    await copyRows(operationsWorksheet, worksheet, columns)
    await copyColumnsProperties(operationsWorksheet, worksheet, columns)
    return 1
}

export const zipFiles = async (files: Workbook, zip: any, name: string ) => {
    
    const workbookBuffer = await files.xlsx.writeBuffer()
    const blob = await new Blob([workbookBuffer], { type: `application/xls` });
    const arrayBuffer = await blob.arrayBuffer();
    
    await zip.file( `${name}`, arrayBuffer);
    return zip
}