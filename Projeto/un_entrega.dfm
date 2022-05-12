object Dtm_Entrega: TDtm_Entrega
  OldCreateOrder = False
  Height = 307
  Width = 562
  object Conexao: TADOConnection
    ConnectionString = 
      'Provider=SQLOLEDB.1;Password=Pc1190623;Persist Security Info=Tru' +
      'e;User ID=sa;Initial Catalog=Pagamentos_Lj4;Data Source=DOUGLAS;' +
      'Use Procedure for Prepare=1;Auto Translate=True;Packet Size=4096' +
      ';Workstation ID=STATRAENTE;Use Encryption for Data=False;Tag wit' +
      'h column collation when possible=False'
    LoginPrompt = False
    Provider = 'SQLOLEDB.1'
    Left = 24
    Top = 8
  end
  object Qry_CadCondutor: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_CONDUTOR')
    Left = 96
    Top = 8
    object Qry_CadCondutorID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object Qry_CadCondutorCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object Qry_CadCondutorVEICULO: TStringField
      FieldName = 'VEICULO'
      Size = 30
    end
    object Qry_CadCondutorPLACA: TStringField
      FieldName = 'PLACA'
    end
  end
  object Ds_Condutor: TDataSource
    DataSet = Qry_CadCondutor
    Left = 178
    Top = 9
  end
  object Qry_CadTipo: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_TIPOENT')
    Left = 248
    Top = 9
    object Qry_CadTipoTIPO_ENTREGA: TStringField
      FieldName = 'TIPO_ENTREGA'
    end
  end
  object Ds_CadTipo: TDataSource
    DataSet = Qry_CadTipo
    Left = 323
    Top = 11
  end
  object Qry_Gerencia: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_GERENCIA')
    Left = 24
    Top = 56
    object Qry_GerenciaGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
  end
  object Ds_Gerencia: TDataSource
    DataSet = Qry_Gerencia
    Left = 98
    Top = 57
  end
  object Qry_Lojas: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_LOJAS')
    Left = 178
    Top = 58
    object Qry_LojasLOJA_ENTREGA: TStringField
      FieldName = 'LOJA_ENTREGA'
      Size = 10
    end
  end
  object Ds_Lojas: TDataSource
    DataSet = Qry_Lojas
    Left = 250
    Top = 60
  end
  object Qry_MovEntrega: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM MOV_ENTREGAS')
    Left = 320
    Top = 61
    object Qry_MovEntregaREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object Qry_MovEntregaID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object Qry_MovEntregaCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object Qry_MovEntregaVEICULO: TStringField
      FieldName = 'VEICULO'
    end
    object Qry_MovEntregaPLACA: TStringField
      FieldName = 'PLACA'
    end
    object Qry_MovEntregaDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object Qry_MovEntregaDATA_ENTREGA: TDateTimeField
      FieldName = 'DATA_ENTREGA'
      EditMask = '99/99/9999'
    end
    object Qry_MovEntregaLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Qry_MovEntregaDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object Qry_MovEntregaENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object Qry_MovEntregaBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object Qry_MovEntregaKM_INICIAL: TBCDField
      FieldName = 'KM_INICIAL'
      Precision = 18
      Size = 0
    end
    object Qry_MovEntregaKM_FINAL: TBCDField
      FieldName = 'KM_FINAL'
      Precision = 18
      Size = 0
    end
    object Qry_MovEntregaHORARIO_SAIDA: TWideStringField
      FieldName = 'HORARIO_SAIDA'
      EditMask = '99:99:99'
      Size = 16
    end
    object Qry_MovEntregaHORARIO_CHEGADA: TWideStringField
      FieldName = 'HORARIO_CHEGADA'
      EditMask = '99:99:99'
      Size = 16
    end
    object Qry_MovEntregaGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_MovEntregaOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object Qry_MovEntregaVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object Qry_MovEntregaVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Qry_MovEntregaSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object Qry_MovEntregaNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object Qry_MovEntregaPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object Qry_MovEntregaCODIGO: TIntegerField
      FieldName = 'CODIGO'
    end
    object Qry_MovEntregaHORA: TWideStringField
      FieldName = 'HORA'
      EditMask = '!90:00:00;1;_'
      Size = 16
    end
  end
  object Ds_MovEntrega: TDataSource
    DataSet = Qry_MovEntrega
    Left = 408
    Top = 62
  end
  object Qry_Realizadas: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM MOV_ENT_REALIZADAS ORDER BY DESTINO'
      ''
      ''
      ''
      '')
    Left = 407
    Top = 9
    object Qry_RealizadasREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object Qry_RealizadasID_CONDUTOR: TIntegerField
      FieldName = 'ID_CONDUTOR'
    end
    object Qry_RealizadasCONDUTOR: TStringField
      FieldName = 'CONDUTOR'
    end
    object Qry_RealizadasVEICULO: TStringField
      FieldName = 'VEICULO'
    end
    object Qry_RealizadasPLACA: TStringField
      FieldName = 'PLACA'
    end
    object Qry_RealizadasDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object Qry_RealizadasDATA_ENTREGA: TDateTimeField
      FieldName = 'DATA_ENTREGA'
    end
    object Qry_RealizadasLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Qry_RealizadasDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object Qry_RealizadasENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object Qry_RealizadasBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object Qry_RealizadasKM_INICIAL: TBCDField
      FieldName = 'KM_INICIAL'
      Precision = 18
      Size = 0
    end
    object Qry_RealizadasKM_FINAL: TBCDField
      FieldName = 'KM_FINAL'
      Precision = 18
      Size = 0
    end
    object Qry_RealizadasHORARIO_SAIDA: TWideStringField
      FieldName = 'HORARIO_SAIDA'
      Size = 16
    end
    object Qry_RealizadasHORARIO_CHEGADA: TWideStringField
      FieldName = 'HORARIO_CHEGADA'
      Size = 16
    end
    object Qry_RealizadasGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_RealizadasOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object Qry_RealizadasVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object Qry_RealizadasVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Qry_RealizadasSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object Qry_RealizadasNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object Qry_RealizadasPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object Qry_RealizadasCODIGO: TIntegerField
      FieldName = 'CODIGO'
    end
    object Qry_RealizadasHORA: TWideStringField
      FieldName = 'HORA'
      Size = 16
    end
  end
  object Ds_Realizadas: TDataSource
    DataSet = Qry_Realizadas
    Left = 489
    Top = 10
  end
  object Qry_Situacao: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_SITUACAO')
    Left = 24
    Top = 107
    object Qry_SituacaoSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
  end
  object Ds_Situacao: TDataSource
    DataSet = Qry_Situacao
    Left = 98
    Top = 108
  end
  object Qry_Vendedor: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_VENDEDOR'
      'ORDER BY NOME')
    Left = 176
    Top = 108
    object Qry_VendedorID_VENDEDOR: TIntegerField
      FieldName = 'ID_VENDEDOR'
    end
    object Qry_VendedorNOME: TStringField
      FieldName = 'NOME'
    end
    object Qry_VendedorCAMINHO_FOTO: TStringField
      FieldName = 'CAMINHO_FOTO'
      Size = 60
    end
  end
  object Ds_Vendedor: TDataSource
    DataSet = Qry_Vendedor
    Left = 251
    Top = 109
  end
  object Query_Cli: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_CLIENTE')
    Left = 319
    Top = 109
    object Query_CliID_CLIENTE: TIntegerField
      FieldName = 'ID_CLIENTE'
    end
    object Query_CliCLIENTE: TStringField
      FieldName = 'CLIENTE'
      Size = 40
    end
    object Query_CliENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object Query_CliNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object Query_CliBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object Query_CliCIDADE: TStringField
      FieldName = 'CIDADE'
    end
  end
  object Ds_Cli: TDataSource
    DataSet = Query_Cli
    Left = 369
    Top = 109
  end
  object Query_Ent: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'SELECT DESTINO, ENDERECO, LOJA, PAGAMENTO, NUMERO, BAIRRO, VENDE' +
        'DOR, VALOR, OBSERVACOES, SITUACAO, GERENCIA'
      'FROM MOV_ENTREGAS')
    Left = 429
    Top = 109
    object Query_EntDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object Query_EntENDERECO: TStringField
      FieldName = 'ENDERECO'
      Size = 40
    end
    object Query_EntLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Query_EntPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
    object Query_EntNUMERO: TBCDField
      FieldName = 'NUMERO'
      Precision = 18
      Size = 0
    end
    object Query_EntBAIRRO: TStringField
      FieldName = 'BAIRRO'
    end
    object Query_EntVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object Query_EntVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Query_EntOBSERVACOES: TMemoField
      FieldName = 'OBSERVACOES'
      BlobType = ftMemo
    end
    object Query_EntSITUACAO: TStringField
      FieldName = 'SITUACAO'
    end
    object Query_EntGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
  end
  object Tipo_Pag: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_PAG')
    Left = 24
    Top = 155
    object Tipo_PagPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
    end
  end
  object Tipo_Pagam: TDataSource
    DataSet = Tipo_Pag
    Left = 98
    Top = 155
  end
  object Query_Real: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT DESTINO, VALOR, PAGAMENTO FROM MOV_ENT_REALIZADAS'
      'ORDER BY DESTINO')
    Left = 488
    Top = 63
    object Query_RealDESTINO: TStringField
      FieldName = 'DESTINO'
      Size = 30
    end
    object Query_RealVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Query_RealPAGAMENTO: TStringField
      FieldName = 'PAGAMENTO'
      Size = 15
    end
  end
  object Qry_CadUsu: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_USUARIO')
    Left = 176
    Top = 155
    object Qry_CadUsuCOD_USU: TIntegerField
      FieldName = 'COD_USU'
    end
    object Qry_CadUsuUSUARIO: TStringField
      FieldName = 'USUARIO'
    end
    object Qry_CadUsuSENHA: TStringField
      FieldName = 'SENHA'
      Size = 7
    end
    object Qry_CadUsuCONFIRMA: TStringField
      FieldName = 'CONFIRMA'
      Size = 7
    end
    object Qry_CadUsuDATA: TDateTimeField
      FieldName = 'DATA'
    end
  end
  object Ds_CadUsu: TDataSource
    DataSet = Qry_CadUsu
    Left = 252
    Top = 156
  end
  object Qry_PagTransf: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_PAGTRANSF ORDER BY REGISTRO,DATA')
    Left = 326
    Top = 157
    object Qry_PagTransfREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object Qry_PagTransfCLIENTE: TStringField
      FieldName = 'CLIENTE'
    end
    object Qry_PagTransfDATA: TDateTimeField
      FieldName = 'DATA'
      EditMask = '99/99/9999'
    end
    object Qry_PagTransfDATA_PAG: TDateTimeField
      FieldName = 'DATA_PAG'
      EditMask = '99/99/9999'
    end
    object Qry_PagTransfVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Qry_PagTransfVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object Qry_PagTransfBANCO: TStringField
      FieldName = 'BANCO'
    end
    object Qry_PagTransfGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_PagTransfCAMINHO_FOTO: TStringField
      FieldName = 'CAMINHO_FOTO'
      Size = 60
    end
    object Qry_PagTransfTIPO_PAG: TStringField
      FieldName = 'TIPO_PAG'
    end
    object Qry_PagTransfID_VENDEDOR: TIntegerField
      FieldName = 'ID_VENDEDOR'
    end
    object Qry_PagTransfSTATUS_IMP: TStringField
      FieldName = 'STATUS_IMP'
      Size = 15
    end
  end
  object Ds_PagTransf: TDataSource
    DataSet = Qry_PagTransf
    Left = 407
    Top = 157
  end
  object Qry_Banco: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_BANCOS')
    Left = 24
    Top = 204
    object Qry_BancoBANCO: TStringField
      FieldName = 'BANCO'
    end
  end
  object Ds_Banco: TDataSource
    DataSet = Qry_Banco
    Left = 97
    Top = 204
  end
  object Query_Comp: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT CLIENTE, VALOR, DATA, BANCO, VENDEDOR FROM CAD_PAGTRANSF')
    Left = 494
    Top = 110
    object Query_CompCLIENTE: TStringField
      FieldName = 'CLIENTE'
    end
    object Query_CompVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Query_CompDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object Query_CompBANCO: TStringField
      FieldName = 'BANCO'
    end
    object Query_CompVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
  end
  object Qry_Provisorios: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_PROVISORIOS')
    Left = 176
    Top = 204
    object Qry_ProvisoriosPROVISORIO: TIntegerField
      FieldName = 'PROVISORIO'
    end
    object Qry_ProvisoriosENTRADA: TDateTimeField
      FieldName = 'ENTRADA'
      EditMask = '99/99/9999'
    end
    object Qry_ProvisoriosLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Qry_ProvisoriosVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Qry_ProvisoriosVENCIMENTO: TDateTimeField
      FieldName = 'VENCIMENTO'
      EditMask = '99/99/9999'
    end
    object Qry_ProvisoriosEXTENSO: TMemoField
      FieldName = 'EXTENSO'
      BlobType = ftMemo
    end
    object Qry_ProvisoriosCOD_CLI: TIntegerField
      FieldName = 'COD_CLI'
    end
    object Qry_ProvisoriosNOME_CLI: TStringField
      FieldName = 'NOME_CLI'
      Size = 40
    end
    object Qry_ProvisoriosPRAZO: TIntegerField
      FieldName = 'PRAZO'
    end
    object Qry_ProvisoriosDATA_EXTENSO: TMemoField
      FieldName = 'DATA_EXTENSO'
      BlobType = ftMemo
    end
    object Qry_ProvisoriosTIPO_DOC: TStringField
      FieldName = 'TIPO_DOC'
      Size = 30
    end
    object Qry_ProvisoriosGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_ProvisoriosNUMERO_NFE: TIntegerField
      FieldName = 'NUMERO_NFE'
    end
  end
  object Ds_Provisorios: TDataSource
    DataSet = Qry_Provisorios
    Left = 257
    Top = 204
  end
  object Qry_Duplicatas: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_DUPLICATAS')
    Left = 336
    Top = 204
    object Qry_DuplicatasDUPLICATA: TIntegerField
      FieldName = 'DUPLICATA'
    end
    object Qry_DuplicatasENTRADA: TWideStringField
      FieldName = 'ENTRADA'
      Size = 10
    end
    object Qry_DuplicatasLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Qry_DuplicatasVALOR: TFloatField
      FieldName = 'VALOR'
    end
    object Qry_DuplicatasEXTENSO: TMemoField
      FieldName = 'EXTENSO'
      BlobType = ftMemo
    end
    object Qry_DuplicatasVENCIMENTO: TWideStringField
      FieldName = 'VENCIMENTO'
      Size = 10
    end
    object Qry_DuplicatasCOD_CLI: TIntegerField
      FieldName = 'COD_CLI'
    end
    object Qry_DuplicatasNOME_CLI: TStringField
      FieldName = 'NOME_CLI'
      Size = 40
    end
  end
  object Ds_Duplicatas: TDataSource
    DataSet = Qry_Duplicatas
    Left = 413
    Top = 205
  end
  object Qry_Prov: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'SELECT PROVISORIO, ENTRADA, LOJA, NUMERO_NFE, GERENCIA, VALOR, T' +
        'IPO_DOC, COD_CLI, NOME_CLI, PRAZO, VENCIMENTO, DATA_EXTENSO, EXT' +
        'ENSO FROM CAD_PROVISORIOS')
    Left = 495
    Top = 159
    object Qry_ProvPROVISORIO: TIntegerField
      FieldName = 'PROVISORIO'
    end
    object Qry_ProvENTRADA: TDateTimeField
      FieldName = 'ENTRADA'
    end
    object Qry_ProvLOJA: TStringField
      FieldName = 'LOJA'
      Size = 10
    end
    object Qry_ProvVALOR: TFloatField
      FieldName = 'VALOR'
    end
    object Qry_ProvCOD_CLI: TIntegerField
      FieldName = 'COD_CLI'
    end
    object Qry_ProvNOME_CLI: TStringField
      FieldName = 'NOME_CLI'
      Size = 40
    end
    object Qry_ProvPRAZO: TIntegerField
      FieldName = 'PRAZO'
    end
    object Qry_ProvVENCIMENTO: TDateTimeField
      FieldName = 'VENCIMENTO'
    end
    object Qry_ProvDATA_EXTENSO: TMemoField
      FieldName = 'DATA_EXTENSO'
      BlobType = ftMemo
    end
    object Qry_ProvEXTENSO: TMemoField
      FieldName = 'EXTENSO'
      BlobType = ftMemo
    end
    object Qry_ProvTIPO_DOC: TStringField
      FieldName = 'TIPO_DOC'
      Size = 30
    end
    object Qry_ProvGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_ProvNUMERO_NFE: TIntegerField
      FieldName = 'NUMERO_NFE'
    end
  end
  object Query_Doc: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_TIPODOC')
    Left = 24
    Top = 252
    object Query_DocTIPO_DOC: TStringField
      FieldName = 'TIPO_DOC'
      Size = 30
    end
  end
  object Ds_CadTipoDoc: TDataSource
    DataSet = Query_Doc
    Left = 97
    Top = 252
  end
  object Qry_Trans: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'SELECT REGISTRO, CLIENTE, DATA, VALOR, VENDEDOR, BANCO, GERENCIA' +
        ' FROM CAD_PAGTRANSF')
    Left = 495
    Top = 207
    object Qry_TransREGISTRO: TIntegerField
      FieldName = 'REGISTRO'
    end
    object Qry_TransCLIENTE: TStringField
      FieldName = 'CLIENTE'
    end
    object Qry_TransDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object Qry_TransVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
    object Qry_TransVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
    object Qry_TransBANCO: TStringField
      FieldName = 'BANCO'
    end
    object Qry_TransGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
  end
  object Qry_Tipo: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT * FROM CAD_TIPO_PAG')
    Left = 176
    Top = 253
    object Qry_TipoCAD_TIPO_PAG: TStringField
      FieldName = 'CAD_TIPO_PAG'
    end
  end
  object Ds_Tipo: TDataSource
    DataSet = Qry_Tipo
    Left = 249
    Top = 253
  end
  object Qry_Trasf: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'SELECT CLIENTE, DATA, DATA_PAG, VALOR, ID_VENDEDOR, TIPO_PAG, BA' +
        'NCO, GERENCIA, VENDEDOR '
      'FROM CAD_PAGTRANSF'
      'ORDER BY DATA')
    Left = 336
    Top = 253
    object Qry_TrasfCLIENTE: TStringField
      FieldName = 'CLIENTE'
    end
    object Qry_TrasfDATA: TDateTimeField
      FieldName = 'DATA'
    end
    object Qry_TrasfDATA_PAG: TDateTimeField
      FieldName = 'DATA_PAG'
    end
    object Qry_TrasfVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
    end
    object Qry_TrasfTIPO_PAG: TStringField
      FieldName = 'TIPO_PAG'
    end
    object Qry_TrasfBANCO: TStringField
      FieldName = 'BANCO'
    end
    object Qry_TrasfGERENCIA: TStringField
      FieldName = 'GERENCIA'
    end
    object Qry_TrasfID_VENDEDOR: TIntegerField
      FieldName = 'ID_VENDEDOR'
    end
    object Qry_TrasfVENDEDOR: TStringField
      FieldName = 'VENDEDOR'
    end
  end
  object Qry_reldiario: TADOQuery
    Connection = Conexao
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'SELECT CLIENTE, DATA_PAG, VALOR FROM CAD_PAGTRANSF'
      'ORDER BY CLIENTE')
    Left = 415
    Top = 255
    object Qry_reldiarioCLIENTE: TStringField
      FieldName = 'CLIENTE'
    end
    object Qry_reldiarioDATA_PAG: TDateTimeField
      FieldName = 'DATA_PAG'
    end
    object Qry_reldiarioVALOR: TFloatField
      FieldName = 'VALOR'
      DisplayFormat = ',0.00'
      currency = True
    end
  end
end
