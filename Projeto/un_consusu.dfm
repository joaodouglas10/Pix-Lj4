object frm_consusu: Tfrm_consusu
  Left = 430
  Top = 233
  Caption = 'Consulta de Usu'#225'rios - Transfer'#234'ncias Lojas - vers'#227'o: 1.2'
  ClientHeight = 248
  ClientWidth = 470
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  Position = poDesigned
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object SpeedButton1: TSpeedButton
    Left = 200
    Top = 214
    Width = 73
    Height = 26
    Caption = 'Sair'
    Glyph.Data = {
      76010000424D7601000000000000760000002800000020000000100000000100
      04000000000000010000120B0000120B00001000000000000000000000000000
      800000800000008080008000000080008000808000007F7F7F00BFBFBF000000
      FF0000FF000000FFFF00FF000000FF00FF00FFFF0000FFFFFF00330000000000
      03333377777777777F333301111111110333337F333333337F33330111111111
      0333337F333333337F333301111111110333337F333333337F33330111111111
      0333337F333333337F333301111111110333337F333333337F33330111111111
      0333337F3333333F7F333301111111B10333337F333333737F33330111111111
      0333337F333333337F333301111111110333337F33FFFFF37F3333011EEEEE11
      0333337F377777F37F3333011EEEEE110333337F37FFF7F37F3333011EEEEE11
      0333337F377777337F333301111111110333337F333333337F33330111111111
      0333337FFFFFFFFF7F3333000000000003333377777777777333}
    NumGlyphs = 2
    OnClick = SpeedButton1Click
  end
  object DBGrid1: TDBGrid
    Left = 10
    Top = 47
    Width = 449
    Height = 161
    Color = clWhite
    DataSource = Dtm_Entrega.Ds_CadUsu
    DrawingStyle = gdsClassic
    TabOrder = 0
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
    OnCellClick = DBGrid1CellClick
    Columns = <
      item
        Expanded = False
        FieldName = 'COD_USU'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'USUARIO'
        Visible = True
      end
      item
        Expanded = False
        FieldName = 'DATA'
        Visible = True
      end>
  end
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 470
    Height = 41
    Align = alTop
    Caption = 'Consulta de Usu'#225'rios'
    Color = 8404992
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clYellow
    Font.Height = -24
    Font.Name = 'Tahoma'
    Font.Style = [fsBold]
    ParentBackground = False
    ParentFont = False
    TabOrder = 1
  end
end
