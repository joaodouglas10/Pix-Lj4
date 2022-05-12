object dtm_entregas: Tdtm_entregas
  OldCreateOrder = False
  Left = 1637
  Top = 121
  Height = 315
  Width = 334
  object conexao: TADOConnection
    Connected = True
    ConnectionString = 
      'Provider=SQLOLEDB.1;Password=M@sterkey;Persist Security Info=Tru' +
      'e;User ID=sa;Initial Catalog=Entregas;Data Source=dbsrv;Use Proc' +
      'edure for Prepare=1;Auto Translate=True;Packet Size=4096;Worksta' +
      'tion ID=STATRAENTE;Use Encryption for Data=False;Tag with column' +
      ' collation when possible=False'
    LoginPrompt = False
    Provider = 'SQLOLEDB.1'
    Left = 30
    Top = 6
  end
  object qry_cadcondutor: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_CONDUTOR')
    Left = 170
    Top = 8
    object qry_cadcondutorID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object qry_cadcondutorCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object qry_cadcondutorVEICULO: TStringField
      FieldName = 'VEICULO'
      Size = 30
    end
    object qry_cadcondutorPLACA: TStringField
      FieldName = 'PLACA'
    end
  end
  object ds_cadcondutor: TDataSource
    DataSet = qry_cadcondutor
    Left = 253
    Top = 8
  end
  object ds_moventrega: TDataSource
    DataSet = qry_moventrega
    Left = 257
    Top = 60
  end
  object qry_moventrega: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM MOV_ENTREGAS ORDER BY REGISTRO,PAGAMENTO')
    Left = 174
    Top = 59
    object qry_moventregaREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object qry_moventregaID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object qry_moventregaCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object qry_moventregaVEICULO: TStringField
      FieldName = 'VEICULO'
    end
    object qry_moventregaPLACA: TStringField
      FieldName = 'PLACA'
    end
    object qry_moventregaDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object qry_moventregaLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object qry_moventregaDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object qry_moventregaENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object qry_moventregaBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object qry_moventregaKM_INICIAL: TBCDField
      FieldName = 'KM_INICIAL'
      Precision = 18
      Size = 0
    end
    object qry_moventregaKM_FINAL: TBCDField
      FieldName = 'KM_FINAL'
      Precision = 18
      Size = 0
    end
    object qry_moventregaHORARIO_SAIDA: TWideStringField
      FieldName = 'HORARIO_SAIDA'
      EditMask = '99:99:99'
      Size = 16
    end
    object qry_moventregaHORARIO_CHEGADA: TWideStringField
      FieldName = 'HORARIO_CHEGADA'
      EditMask = '99:99:99'
      Size = 16
    end
    object qry_moventregaGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object qry_moventregaOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object qry_moventregaVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object qry_moventregaVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object qry_moventregaSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object qry_moventregaNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object qry_moventregaPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object qry_moventregaCODIGO: TIntegerField
      FieldName = 'CODIGO'
    end
    object qry_moventregaHORA: TWideStringField
      FieldName = 'HORA'
      EditMask = '99:99:99'
      Size = 16
    end
  end
  object qry_lojas: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_LOJAS')
    Left = 32
    Top = 107
    object qry_lojasLOJA_ENTREGA: TStringField
      FieldName = 'LOJA_ENTREGA'
      Size = 10
    end
  end
  object ds_lojas: TDataSource
    DataSet = qry_lojas
    Left = 100
    Top = 107
  end
  object qry_gerencia: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_GERENCIA')
    Left = 173
    Top = 108
    object qry_gerenciaGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
  end
  object ds_gerencia: TDataSource
    DataSet = qry_gerencia
    Left = 256
    Top = 108
  end
  object query_ent: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'SELECT DESTINO, ENDERECO, NUMERO, PAGAMENTO, LOJA, BAIRRO, VENDE' +
        'DOR, VALOR, OBSERVACOES, SITUACAO, GERENCIA FROM MOV_ENTREGAS'
      '')
    Left = 92
    Top = 8
    object query_entDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object query_entENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object query_entBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object query_entVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object query_entVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object query_entOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object query_entSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object query_entNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object query_entLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object query_entPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object query_entGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
  end
  object qry_vendedor: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT *  FROM CAD_VENDEDOR')
    Left = 176
    Top = 160
    object qry_vendedorID_VENDEDOR: TIntegerField
      FieldName = 'ID_VENDEDOR'
    end
    object qry_vendedorNOME: TStringField
      FieldName = 'NOME'
    end
  end
  object ds_vendedor: TDataSource
    DataSet = qry_vendedor
    Left = 255
    Top = 160
  end
  object qry_situacao: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_SITUACAO')
    Left = 31
    Top = 58
    object qry_situacaoSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
  end
  object ds_situacao: TDataSource
    DataSet = qry_situacao
    Left = 99
    Top = 59
  end
  object qry_realizadas: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM MOV_ENT_REALIZADAS'
      'ORDER BY DATA')
    Left = 30
    Top = 160
    object qry_realizadasREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object qry_realizadasID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object qry_realizadasCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object qry_realizadasVEICULO: TStringField
      FieldName = 'VEICULO'
    end
    object qry_realizadasPLACA: TStringField
      FieldName = 'PLACA'
    end
    object qry_realizadasDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object qry_realizadasLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object qry_realizadasDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object qry_realizadasENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object qry_realizadasBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object qry_realizadasKM_INICIAL: TBCDField
      FieldName = 'KM_INICIAL'
      Precision = 18
      Size = 0
    end
    object qry_realizadasKM_FINAL: TBCDField
      FieldName = 'KM_FINAL'
      Precision = 18
      Size = 0
    end
    object qry_realizadasHORARIO_SAIDA: TWideStringField
      FieldName = 'HORARIO_SAIDA'
      Size = 16
    end
    object qry_realizadasHORARIO_CHEGADA: TWideStringField
      FieldName = 'HORARIO_CHEGADA'
      Size = 16
    end
    object qry_realizadasGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object qry_realizadasOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object qry_realizadasVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object qry_realizadasVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object qry_realizadasSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object qry_realizadasNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object qry_realizadasPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object qry_realizadasCODIGO: TIntegerField
      FieldName = 'CODIGO'
    end
    object qry_realizadasHORA: TWideStringField
      FieldName = 'HORA'
      Size = 16
    end
  end
  object ds_realizadas: TDataSource
    DataSet = qry_realizadas
    Left = 103
    Top = 160
  end
  object ds_cli: TDataSource
    DataSet = query_cli
    Left = 103
    Top = 216
  end
  object query_cli: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_CLIENTE')
    Left = 30
    Top = 216
    object query_cliID_CLIENTE: TIntegerField
      FieldName = 'ID_CLIENTE'
    end
    object query_cliCLIENTE: TStringField
      FieldName = 'CLIENTE'
      Size = 40
    end
    object query_cliENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object query_cliNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object query_cliBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object query_cliCIDADE: TStringField
      FieldName = 'CIDADE'
    end
  end
  object qry_cadtipo: TADOQuery
    Connection = conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_TIPOENT')
    Left = 174
    Top = 216
    object qry_cadtipoTIPO_ENTREGA: TStringField
      FieldName = 'TIPO_ENTREGA'
    end
  end
  object ds_cadtipo: TDataSource
    DataSet = qry_cadtipo
    Left = 254
    Top = 216
  end
end
