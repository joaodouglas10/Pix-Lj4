unit un_pagtransf;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Mask, Vcl.DBCtrls,
  Vcl.Buttons, Vcl.ExtCtrls, Vcl.Grids, Vcl.DBGrids, RxToolEdit, RxDBCtrl,
  RpBase, RpSystem, RpRave, RpDefine, RpCon, RpConDS, frxClass, frxDBSet,
  sButton, sLabel, Vcl.ExtDlgs, Data.DB, sSpeedButton, Vcl.ComCtrls,
  Vcl.Imaging.jpeg, Vcl.Samples.Gauges;

type
  Tfrm_pagTransf = class(TForm)
    Label1: TLabel;
    reg: TDBEdit;
    Label2: TLabel;
    cliente: TDBEdit;
    Label3: TLabel;
    Label4: TLabel;
    valor: TDBEdit;
    DBGrid1: TDBGrid;
    Label6: TLabel;
    banco: TDBLookupComboBox;
    frxDB_PagTrans: TfrxDBDataset;
    Rel_CompPag: TfrxReport;
    Label7: TLabel;
    gerente: TDBLookupComboBox;
    frxDB_Transf: TfrxDBDataset;
    Label9: TLabel;
    DBGrid2: TDBGrid;
    Panel2: TPanel;
    Label8: TLabel;
    Label11: TLabel;
    tipo: TDBLookupComboBox;
    Rv_Transf: TRvProject;
    RvDataSet_Transf: TRvDataSetConnection;
    data: TDBDateEdit;
    data_pag: TDBDateEdit;
    Label14: TLabel;
    id_vend: TDBEdit;
    Label15: TLabel;
    sButton1: TSpeedButton;
    RvSystem1: TRvSystem;
    Label5: TLabel;
    status: TDBEdit;
    StatusBar1: TStatusBar;
    nome_vend: TDBLookupComboBox;
    RadioGroup1: TRadioGroup;
    Panel1: TPanel;
    novo: TSpeedButton;
    Panel3: TPanel;
    editar: TSpeedButton;
    Panel4: TPanel;
    excluir: TSpeedButton;
    Panel5: TPanel;
    gravar: TSpeedButton;
    Panel6: TPanel;
    cancelar: TSpeedButton;
    Panel8: TPanel;
    Sair: TSpeedButton;
    Panel13: TPanel;
    Panel10: TPanel;
    Panel11: TPanel;
    SpeedButton2: TSpeedButton;
    SpeedButton1: TSpeedButton;
    Panel14: TPanel;
    Label12: TLabel;
    DatIni: TDateEdit;
    Panel12: TPanel;
    SpeedButton3: TSpeedButton;
    Radio: TRadioGroup;
    Edit1: TEdit;
    Label10: TLabel;
    caminho: TDBEdit;
    DBNavigator1: TDBNavigator;
    Panel9: TPanel;
    OpenPictureDialog1: TOpenPictureDialog;
    foto: TImage;
    Image2: TImage;
    Panel15: TPanel;
    Label23: TLabel;
    Panel7: TPanel;
    Label21: TLabel;
    Panel16: TPanel;
    SpeedButton4: TSpeedButton;
    Rel_Diario: TfrxReport;
    frxDB_Diario: TfrxDBDataset;
    Label13: TLabel;
    Label18: TLabel;
    Gauge1: TGauge;
    procedure novoClick(Sender: TObject);
    procedure editarClick(Sender: TObject);
    procedure excluirClick(Sender: TObject);
    procedure gravarClick(Sender: TObject);
    procedure cancelarClick(Sender: TObject);
    procedure sairClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure RadioClick(Sender: TObject);
    procedure Edit1Change(Sender: TObject);
    procedure DBGrid1DrawColumnCell(Sender: TObject; const Rect: TRect;
      DataCol: Integer; Column: TColumn; State: TGridDrawState);
    procedure DBGrid1CellClick(Column: TColumn);
    procedure clienteExit(Sender: TObject);
    procedure valorExit(Sender: TObject);
    procedure bancoExit(Sender: TObject);
    procedure DBGrid2DrawColumnCell(Sender: TObject; const Rect: TRect;
      DataCol: Integer; Column: TColumn; State: TGridDrawState);
    procedure vendedorClick(Sender: TObject);
    procedure DBNavigator1Click(Sender: TObject; Button: TNavigateBtn);
    procedure DBGrid1KeyUp(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure DBGrid1MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure tipoExit(Sender: TObject);
    procedure tipoClick(Sender: TObject);
    procedure gerenteClick(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
    procedure FormKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure nome_vendChange(Sender: TObject);
    procedure nome_vendClick(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
    procedure SpeedButton3Click(Sender: TObject);
    procedure SpeedButton4Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_pagTransf: Tfrm_pagTransf;

implementation

{$R *.dfm}

uses un_entrega, un_relcomp, un_reltransf, un_trasnf, un_conscond, un_consvend,
  un_reldiario;

procedure Tfrm_pagTransf.bancoExit(Sender: TObject);
begin
    if banco.Text = '' then
      begin
         Showmessage('Banco n�o pode ser vazio !');
         banco.SetFocus;
      end
    else
    gerente.SetFocus;
end;

procedure Tfrm_pagTransf.cancelarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Cancelamento de Pagamento? ', 'Confirma��o',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := true;
    cliente.ReadOnly := true;
    banco.ReadOnly := true;
    id_vend.ReadOnly := true;
    nome_vend.ReadOnly := true;
    gerente.ReadOnly := true;
    tipo.ReadOnly := true;
    data.ReadOnly := true;
    data_pag.ReadOnly := true;
    valor.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.Qry_PagTransf.Cancel;
    cliente.setfocus;
    cliente.Color := ClWhite;
    foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.clienteExit(Sender: TObject);
begin
    cliente.Color := ClWhite;
    if cliente.Text = '' then
      begin
         Showmessage('Cliente n�o pode ser vazio !');
         cliente.SetFocus;
      end;
end;

procedure Tfrm_pagTransf.DBGrid1CellClick(Column: TColumn);
begin
if (caminho.Text = '') and (Foto.Picture.Bitmap.Empty) then
   begin
     try
        StrToDate(caminho.Text);
        except on EConvertError do
        begin
           ShowMessage ('Aten��o! N�o foi selecionado uma foto para esse colaborador!');
           exit;
        end;
     end;
   end;
   foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
   ShowScrollBar(DBGrid1.Handle,SB_HORZ,true);
end;

procedure Tfrm_pagTransf.DBGrid1DrawColumnCell(Sender: TObject;
  const Rect: TRect; DataCol: Integer; Column: TColumn; State: TGridDrawState);
begin
   If odd(Dtm_Entrega.Qry_PagTransf.RecNo) then
       begin
          dbgrid1.Canvas.Font.Color:= clBlack;
          dbgrid1.Canvas.Brush.Color:= clBtnFace;
       end;
    if Column.Field = Dtm_Entrega.Qry_PagTransfDATA_PAG then
       begin
          dbgrid1.Canvas.Brush.Color:= cLWhite;
          dbgrid1.Canvas.Font.Color := cLRed;
       end;
     if (Column.Field.FieldName = 'DATA_PAG') then
       begin
         dbgrid1.Canvas.Font.Style := [fsBold];
         dbgrid1.Canvas.Brush.Color:= cLWhite;
       end;
     if (Column.Field.FieldName = 'VALOR') then
       begin
          dbgrid1.Canvas.Font.Style := [fsBold];
          dbgrid1.Canvas.Brush.Color:= $00E8E8D0;
       end;
       dbgrid1.Canvas.FillRect(Rect);
       dbgrid1.DefaultDrawDataCell(Rect, dbgrid1.columns[datacol].field, State);
end;

procedure Tfrm_pagTransf.DBGrid1KeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
if (caminho.Text = '') and (Foto.Picture.Bitmap.Empty) then
   begin
     try
        StrToDate(caminho.Text);
        except on EConvertError do
        begin
           ShowMessage ('Aten��o! N�o foi selecionado uma foto para esse colaborador!');
           exit;
        end;
     end;
   end;
   foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.DBGrid1MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
if (caminho.Text = '') and (Foto.Picture.Bitmap.Empty) then
   begin
     try
        StrToDate(caminho.Text);
        except on EConvertError do
        begin
           ShowMessage ('Aten��o! N�o foi selecionado uma foto para esse colaborador!');
           exit;
        end;
     end;
   end;
   foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.DBGrid2DrawColumnCell(Sender: TObject;
  const Rect: TRect; DataCol: Integer; Column: TColumn; State: TGridDrawState);
begin
   If odd(Dtm_Entrega.Qry_Vendedor.RecNo) then
      begin
          dbgrid2.Canvas.Font.Color:= clBlack;
          dbgrid2.Canvas.Brush.Color:= clBtnFace;
      end;
      dbgrid2.Canvas.FillRect(Rect);
      dbgrid2.DefaultDrawDataCell(Rect, dbgrid2.columns[DataCol].Field, State);
end;

procedure Tfrm_pagTransf.nome_vendClick(Sender: TObject);
begin
   Dtm_Entrega.Qry_PagTransfID_VENDEDOR.Value := Dtm_Entrega.Qry_VendedorID_VENDEDOR.Value;
   Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.AsString := Dtm_Entrega.Qry_VendedorCAMINHO_FOTO.asstring;
   frm_pagTransf.foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.DBNavigator1Click(Sender: TObject;
  Button: TNavigateBtn);
begin
if (caminho.Text = '') and (Foto.Picture.Bitmap.Empty) then
   begin
     try
        StrToDate(caminho.Text);
        except on EConvertError do
        begin
           ShowMessage ('Aten��o! N�o foi selecionado uma foto para esse colaborador!');
           exit;
        end;
     end;
   end;
   foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.Edit1Change(Sender: TObject);
var
   Sql : string;
   Total : Currency;
begin
   Dtm_Entrega.Qry_PagTransf.Close;
   Dtm_Entrega.Qry_PagTransf.Sql.Clear;
   Dtm_Entrega.Qry_PagTransf.Sql.Add('select * from CAD_PAGTRANSF');
   if (radio.ItemIndex = 0) then
     Sql := 'where CLIENTE like ' + QuotedStr('%' + Edit1.Text + '%')
   else if (radio.ItemIndex = 1) then
     Sql := 'where VENDEDOR like ' + QuotedStr('%' + Edit1.Text + '%');
     Dtm_Entrega.Qry_PagTransf.Sql.Add(Sql);
     Dtm_Entrega.Qry_PagTransf.Sql.Add('order by registro,data');
     Dtm_Entrega.Qry_PagTransf.open;
     total := 0;
     Dtm_Entrega.Qry_PagTransf.First;
     Dtm_Entrega.Qry_PagTransf.DisableControls;
     try
       while not Dtm_Entrega.Qry_PagTransf.eof do
       begin
          total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
          Dtm_Entrega.Qry_PagTransf.next;
       end;
       Dtm_Entrega.Qry_PagTransf.EnableControls;
       Label21.Caption := FormatFloat('#,###,###,##0.00', total);
     finally
     end;
     Dtm_Entrega.Qry_PagTransf.Open;
     if (caminho.Text = '') and (Foto.Picture.Bitmap.Empty) then
     begin
       try
          StrToDate(caminho.Text);
          except on EConvertError do
          begin
             ShowMessage ('Aten��o! N�o foi selecionado uma foto para esse colaborador!');
             exit;
          end;
       end;
     end;
     foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

procedure Tfrm_pagTransf.editarClick(Sender: TObject);
begin
    If Application.Messagebox('Confirma Altera��o de Pagamento? ', 'Confirma��o',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    reg.ReadOnly := false;
    cliente.ReadOnly := false;
    id_vend.ReadOnly := true;
    nome_vend.ReadOnly := false;
    banco.ReadOnly := false;
    gerente.ReadOnly := false;
    tipo.ReadOnly := false;
    data.ReadOnly := true;
    data_pag.ReadOnly := false;
    valor.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    Dtm_Entrega.Qry_PagTransf.Edit;
    cliente.setfocus;
end;

procedure Tfrm_pagTransf.excluirClick(Sender: TObject);
var
   total : currency;
begin
   If Dtm_Entrega.Qry_PagTransf.RecordCount <> 0 then
   If Application.Messagebox('Confirma Exclus�o?', 'Confirmar',
      mb_Iconquestion + MB_YesNo + Mb_DefButton1) = IdYes Then
      begin
         Dtm_Entrega.Qry_PagTransf.Delete;
         cliente.setfocus;
         foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
      end;
      total := 0;
      Dtm_Entrega.Qry_PagTransf.First;
      Dtm_Entrega.Qry_PagTransf.DisableControls;
      try
         while not Dtm_Entrega.Qry_PagTransf.eof do
         begin
            total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
            Dtm_Entrega.Qry_PagTransf.next;
         end;
         Dtm_Entrega.Qry_PagTransf.EnableControls;
         Label21.Caption := FormatFloat('#,###,###,##0.00', total);
      finally
      end;
      Dtm_Entrega.Qry_PagTransf.Open;
      If Dtm_Entrega.Qry_PagTransf.RecordCount = 0 then
         showmessage('Nao Existe Registro para Excluir');
end;

procedure Tfrm_pagTransf.FormKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
Var
  codigo: Integer;
  total : currency;
  Function StrZero(Num: Real; Tam: Integer): String;
  // Fun��o para colocar zeros a esquerda
  var
    x, T: Integer;
    N, D: String;

  begin
    N := FloatToStr(Num);
    T := Pos('.', N);
    D := '';
    if T <> 0 then
    begin
      N := Copy(N, 1, T - 1);
      D := Copy(N, T, 3)
    end;
    for x := 1 to Tam - length(N) do
      N := '0' + N;
    result := N + D;
  end;
begin
   Case Key of
   VK_F2: //Comando para teclas de atalho//
      begin
         If Application.Messagebox('Confirma Inclus�o de Pagamento? ', 'Confirma��o',
         mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
      else
      exit;
      foto.Picture := nil;
      reg.ReadOnly := false;
      cliente.ReadOnly := false;
      id_vend.ReadOnly := true;
      nome_vend.ReadOnly := false;
      gerente.ReadOnly := false;
      banco.ReadOnly := false;
      tipo.ReadOnly := false;
      data.ReadOnly := true;
      data_pag.ReadOnly := false;
      valor.ReadOnly := false;
      novo.Enabled := false;
      editar.Enabled := false;
      excluir.Enabled := false;
      cancelar.Enabled := true;
      gravar.Enabled := true;
      sair.Enabled := false;
      if Dtm_Entrega.Qry_PagTransf.RecordCount = 0 Then
         codigo := 1
      else
         begin
            Dtm_Entrega.Qry_PagTransf.Last;
            codigo := Dtm_Entrega.Qry_PagTransfREGISTRO.Asinteger + 1;
         end;
         cliente.Color := ClYellow;
         Dtm_Entrega.Qry_PagTransf.Append;
         Dtm_Entrega.Qry_PagTransfREGISTRO.asstring := StrZero(codigo, 1);
         Dtm_Entrega.Qry_PagTransfDATA.AsString := DatetoStr(Date);
         Dtm_Entrega.Qry_PagTransfDATA_PAG.AsString := DatetoStr(Date);
         cliente.setfocus;
      end;
   end;
   Case Key of
   VK_F3: //Comando para teclas de atalho//
      begin
         If Application.Messagebox('Confirma Altera��o de Pagamento? ', 'Confirma��o',
         mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
         else
         exit;
         reg.ReadOnly := false;
         cliente.ReadOnly := false;
         id_vend.ReadOnly := true;
         nome_vend.ReadOnly := true;
         banco.ReadOnly := false;
         gerente.ReadOnly := false;
         tipo.ReadOnly := false;
         data.ReadOnly := true;
         data_pag.ReadOnly := false;
         valor.ReadOnly := false;
         novo.Enabled := false;
         editar.Enabled := false;
         excluir.Enabled := false;
         cancelar.Enabled := true;
         gravar.Enabled := true;
         sair.Enabled := false;
         dtm_Entrega.Qry_PagTransf.Edit;
         cliente.setfocus;
      end;
    end;
   Case Key of
   VK_F4: //Comando para teclas de atalho//
      begin
          If Dtm_Entrega.Qry_PagTransf.RecordCount <> 0 then
          If Application.Messagebox('Confirma Exclus�o?', 'Confirmar',
          mb_Iconquestion + MB_YesNo + Mb_DefButton1) = IdYes Then
          begin
             Dtm_Entrega.Qry_PagTransf.Delete;
             cliente.setfocus;
             foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
          end;
          total := 0;
          Dtm_Entrega.Qry_PagTransf.First;
          Dtm_Entrega.Qry_PagTransf.DisableControls;
        try
           while not Dtm_Entrega.Qry_PagTransf.eof do
             begin
               total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
               Dtm_Entrega.Qry_PagTransf.next;
             end;
             Dtm_Entrega.Qry_PagTransf.EnableControls;
             Label21.Caption := FormatFloat('#,###,###,##0.00', total);
        finally
        end;
        Dtm_Entrega.Qry_PagTransf.Open;
        If Dtm_Entrega.Qry_PagTransf.RecordCount = 0 then
           showmessage('Nao Existe Registro para Excluir');
       end;
   end;
   Case Key of
   VK_F5: //Comando para teclas de atalho//
       begin
          If Application.Messagebox('Confirma Cancelamento de Pagamento? ', 'Confirma��o',
          mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
       else
       exit;
       reg.ReadOnly := true;
       cliente.ReadOnly := true;
       banco.ReadOnly := true;
       id_vend.ReadOnly := true;
       nome_vend.ReadOnly := true;
       gerente.ReadOnly := true;
       tipo.ReadOnly := true;
       data.ReadOnly := true;
       data_pag.ReadOnly := true;
       valor.ReadOnly := true;
       novo.Enabled := true;
       editar.Enabled := true;
       excluir.Enabled := true;
       cancelar.Enabled := false;
       gravar.Enabled := false;
       sair.Enabled := true;
       dtm_Entrega.Qry_PagTransf.Cancel;
       cliente.setfocus;
       foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
       end;
   end;
  Case Key of
    VK_F6: //Comando para teclas de atalho//
      begin
         If Application.Messagebox('Confirma Grava��o de Pagamento? ', 'Confirma��o',
         mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
      else
      exit;
      reg.ReadOnly := true;
      cliente.ReadOnly := true;
      banco.ReadOnly := true;
      id_vend.ReadOnly := true;
      nome_vend.ReadOnly := true;
      gerente.ReadOnly := true;
      data.ReadOnly := true;
      tipo.ReadOnly := true;
      data_pag.ReadOnly := true;
      valor.ReadOnly := true;
      novo.Enabled := true;
      editar.Enabled := true;
      excluir.Enabled := true;
      cancelar.Enabled := false;
      gravar.Enabled := false;
      sair.Enabled := true;
      Dtm_Entrega.Qry_PagTransfSTATUS_IMP.Asstring := 'N�O IMPRESSO';
      Dtm_Entrega.Qry_PagTransf.Post;
      cliente.setfocus;
      total := 0;
      Dtm_Entrega.Qry_PagTransf.First;
      Dtm_Entrega.Qry_PagTransf.DisableControls;
     try
       while not Dtm_Entrega.Qry_PagTransf.eof do
         begin
           total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
           Dtm_Entrega.Qry_PagTransf.next;
         end;
         Dtm_Entrega.Qry_PagTransf.EnableControls;
         Label21.Caption := FormatFloat('#,###,###,##0.00', total);
     finally
     end;
     Dtm_Entrega.Qry_PagTransf.Open;
     end;
  end;
  Case Key of
   VK_F9: //Comando para teclas de atalho//
     begin
        Dtm_Entrega.Qry_PagTransf.Close;
        Dtm_Entrega.Qry_Vendedor.Close;
        Dtm_Entrega.Qry_Banco.Close;
        Dtm_Entrega.Qry_Gerencia.Close;
        Dtm_Entrega.Qry_Tipo.Close;
        Edit1.Clear;
        Close;
     end;
  end;
  Case Key of
   VK_F10: //Comando para teclas de atalho//
     begin
        frm_pagTransf.Rel_CompPag.loadfromfile('\\GerLj4\Projeto_Pag Lj4\relatorios\rel_compPag.fr3');
        frm_pagTransf.Rel_CompPag.PrepareReport;
        frm_pagTransf.Rel_CompPag.Print;
        Dtm_Entrega.Qry_PagTransf.Edit;
        Dtm_Entrega.Qry_PagTransfSTATUS_IMP.Asstring := 'IMPRESSO';
        Dtm_Entrega.Qry_PagTransf.Post;
     end;
  end;
  Case Key of
   VK_F11: //Comando para teclas de atalho//
     begin
         frm_transf.ShowModal;
     end;
  end;
end;

procedure Tfrm_pagTransf.FormKeyPress(Sender: TObject; var Key: Char);
begin
   If Key=#13 Then
      Selectnext(ActiveControl,True,True);
end;

procedure Tfrm_pagTransf.FormShow(Sender: TObject);
Var
  Total : Currency;
begin
    gauge1.Progress := 0;
    DatIni.text := DateToSTr(Date);
    Dtm_Entrega.Qry_PagTransf.close;
    Dtm_Entrega.Qry_PagTransf.Filtered := False;
    Dtm_Entrega.Qry_PagTransf.Open;
    Dtm_Entrega.Qry_PagTransf.Filter := 'DATA = ' + QuotedStr(DatIni.Text);
    Dtm_Entrega.Qry_PagTransf.Filtered := True;
    Dtm_Entrega.Qry_PagTransf.locate('DATA',DatIni.text,[loCaseInsensitive, loPartialKey]);
    Label21.Caption := '0.00';
    Dtm_Entrega.Qry_PagTransf.Open;
    Dtm_Entrega.Qry_Vendedor.Open;
    Dtm_Entrega.Qry_Banco.Open;
    Dtm_Entrega.Qry_Gerencia.Open;
    Dtm_Entrega.Qry_Tipo.Open;
    reg.SetFocus;
    total := 0;
    Dtm_Entrega.Qry_PagTransf.First;
    Dtm_Entrega.Qry_PagTransf.DisableControls;
    try
      while not Dtm_Entrega.Qry_PagTransf.eof do
        begin
           total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
           Dtm_Entrega.Qry_PagTransf.next;
        end;
        Dtm_Entrega.Qry_PagTransf.EnableControls;
        Label21.Caption := FormatFloat('#,###,###,##0.00', total);
    finally
    end;
    Dtm_Entrega.Qry_PagTransf.Open;
end;

procedure Tfrm_pagTransf.gerenteClick(Sender: TObject);
begin
   nome_vend.SetFocus;
end;

procedure Tfrm_pagTransf.gravarClick(Sender: TObject);
var
  total : currency;
  x : integer;
begin
    If Application.Messagebox('Confirma Grava��o de Pagamento? ', 'Confirma��o',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    for x := 0 to 100 do
       begin
          Dtm_Entrega.Qry_PagTransf.Edit;
          gauge1.Progress := gauge1.Progress+1;
          sleep(10);
       end;
    reg.ReadOnly := true;
    cliente.ReadOnly := true;
    banco.ReadOnly := true;
    id_vend.ReadOnly := true;
    nome_vend.ReadOnly := true;
    gerente.ReadOnly := true;
    data.ReadOnly := true;
    tipo.ReadOnly := true;
    data_pag.ReadOnly := true;
    valor.ReadOnly := true;
    novo.Enabled := true;
    editar.Enabled := true;
    excluir.Enabled := true;
    cancelar.Enabled := false;
    gravar.Enabled := false;
    sair.Enabled := true;
    Dtm_Entrega.Qry_PagTransfSTATUS_IMP.Asstring := 'N�O IMPRESSO';
    Dtm_Entrega.Qry_PagTransf.Post;
    cliente.setfocus;
    total := 0;
    Dtm_Entrega.Qry_PagTransf.First;
    Dtm_Entrega.Qry_PagTransf.DisableControls;
    try
      while not Dtm_Entrega.Qry_PagTransf.eof do
      begin
         total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
         Dtm_Entrega.Qry_PagTransf.next;
      end;
      Dtm_Entrega.Qry_PagTransf.EnableControls;
      Label21.Caption := FormatFloat('#,###,###,##0.00', total);
    finally
    end;
    Dtm_Entrega.Qry_PagTransf.Open;
end;

procedure Tfrm_pagTransf.nome_vendChange(Sender: TObject);
begin
    Dtm_Entrega.qry_vendedor.close;
    Dtm_Entrega.qry_vendedor.Sql.Clear;
    Dtm_Entrega.qry_vendedor.Sql.Add('select * from CAD_VENDEDOR');
    Dtm_Entrega.qry_vendedor.Sql.Add('where NOME like ' + QuotedStr('%' + Edit1.Text + '%'));
    Dtm_Entrega.qry_vendedor.Sql.Add('order by NOME');
    Dtm_Entrega.qry_vendedor.open;
end;

procedure Tfrm_pagTransf.novoClick(Sender: TObject);
var
  codigo: Integer; // Vari�vel do tipo integer
  Function StrZero(Num: Real; Tam: Integer): String;
  // Fun��o para colocar zeros a esquerda
  var
    x, T: Integer;
    N, D: String;

  begin
    N := FloatToStr(Num);
    T := Pos('.', N);
    D := '';
    if T <> 0 then
    begin
      N := Copy(N, 1, T - 1);
      D := Copy(N, T, 3)
    end;
    for x := 1 to Tam - length(N) do
      N := '0' + N;
    result := N + D;
  end;
begin
    If Application.Messagebox('Confirma Inclus�o de Pagamento? ', 'Confirma��o',
    mb_Iconquestion + Mb_OkCancel + Mb_DefButton1) = IdOk then
    else
    exit;
    foto.Picture := nil;
    reg.ReadOnly := false;
    cliente.ReadOnly := false;
    nome_vend.ReadOnly := false;
    id_vend.ReadOnly := true;
    gerente.ReadOnly := false;
    banco.ReadOnly := false;
    tipo.ReadOnly := false;
    data.ReadOnly := true;
    data_pag.ReadOnly := false;
    valor.ReadOnly := false;
    novo.Enabled := false;
    editar.Enabled := false;
    excluir.Enabled := false;
    cancelar.Enabled := true;
    gravar.Enabled := true;
    sair.Enabled := false;
    if Dtm_Entrega.Qry_PagTransf.RecordCount = 0 Then
       codigo := 1
    else
        begin
           Dtm_Entrega.Qry_PagTransf.Last;
           codigo := Dtm_Entrega.Qry_PagTransfREGISTRO.Asinteger + 1;
        end;
        cliente.Color := ClYellow;
        Dtm_Entrega.Qry_PagTransf.Append;
        Dtm_Entrega.Qry_PagTransfREGISTRO.asstring := StrZero(codigo, 1);
        Dtm_Entrega.Qry_PagTransfDATA.AsString := DatetoStr(Date);
        Dtm_Entrega.Qry_PagTransfDATA_PAG.AsString := DatetoStr(Date);
        cliente.setfocus;
end;

procedure Tfrm_pagTransf.RadioClick(Sender: TObject);
begin
   edit1.SetFocus;
end;

procedure Tfrm_pagTransf.sairClick(Sender: TObject);
begin
    Dtm_Entrega.Qry_PagTransf.Close;
    Dtm_Entrega.Qry_Vendedor.Close;
    Dtm_Entrega.Qry_Banco.Close;
    Dtm_Entrega.Qry_Gerencia.Close;
    Dtm_Entrega.Qry_Tipo.Close;
    Edit1.Clear;
    Close;
end;

procedure Tfrm_pagTransf.sButton1Click(Sender: TObject);
begin
   frm_consven.cod := 1;
   dbgrid1.SetFocus;
   frm_consven.showmodal;
end;

procedure Tfrm_pagTransf.SpeedButton1Click(Sender: TObject);
begin
   frm_pagTransf.Rel_CompPag.loadfromfile('\\Douglas\Projeto_Pag Lj4\relatorios\rel_compPag.fr3');
   frm_pagTransf.Rel_CompPag.PrepareReport;
   frm_pagTransf.Rel_CompPag.Print;
//   frm_pagTransf.Rel_CompPag.ShowReport;
   Dtm_Entrega.Qry_PagTransf.Edit;
   Dtm_Entrega.Qry_PagTransfSTATUS_IMP.Asstring := 'IMPRESSO';
   Dtm_Entrega.Qry_PagTransf.Post;
end;

procedure Tfrm_pagTransf.SpeedButton2Click(Sender: TObject);
begin
   frm_transf.ShowModal;
end;

procedure Tfrm_pagTransf.SpeedButton3Click(Sender: TObject);
var
  total : currency;
begin
    Dtm_Entrega.Qry_PagTransf.close;
    Dtm_Entrega.Qry_PagTransf.Filtered := False;
    Dtm_Entrega.Qry_PagTransf.Open;
    Dtm_Entrega.Qry_PagTransf.Filter := 'DATA = ' + QuotedStr(DatIni.Text);
    Dtm_Entrega.Qry_PagTransf.Filtered := True;
    Dtm_Entrega.Qry_PagTransf.locate('DATA',DatIni.text,[loCaseInsensitive, loPartialKey]);
    total := 0;
    Dtm_Entrega.Qry_PagTransf.First;
    Dtm_Entrega.Qry_PagTransf.DisableControls;
    try
      while not Dtm_Entrega.Qry_PagTransf.eof do
        begin
           total := total + Dtm_Entrega.Qry_PagTransf.FieldByName('VALOR').AsCurrency;
           Dtm_Entrega.Qry_PagTransf.next;
        end;
        Dtm_Entrega.Qry_PagTransf.EnableControls;
        Label21.Caption := FormatFloat('#,###,###,##0.00', total);
    finally
    end;
    Dtm_Entrega.Qry_PagTransf.Open;
end;

procedure Tfrm_pagTransf.SpeedButton4Click(Sender: TObject);
begin
   frm_reldiario.showmodal;
end;

procedure Tfrm_pagTransf.tipoClick(Sender: TObject);
begin
   if Dtm_Entrega.Qry_PagTransfTIPO_PAG.AsString = 'PIX' then
      begin
         Dtm_Entrega.Qry_PagTransfBANCO.AsString := 'BRADESCO';
         gerente.SetFocus;
      end
   else
   Dtm_Entrega.Qry_PagTransfBANCO.Asstring := '';
end;

procedure Tfrm_pagTransf.tipoExit(Sender: TObject);
begin
   if tipo.Text = '' then
     begin
        Showmessage('Tipo n�o pode ser vazio !');
        tipo.SetFocus;
     end
   else
   banco.SetFocus;
end;

procedure Tfrm_pagTransf.valorExit(Sender: TObject);
begin
    if valor.Text = '' then
      begin
         Showmessage('Valor n�o pode ser vazio !');
         valor.SetFocus;
      end;
end;

procedure Tfrm_pagTransf.vendedorClick(Sender: TObject);
begin
  if Dtm_Entrega.Qry_VendedorCAMINHO_FOTO.Value = '' then
     begin
         Showmessage('Foto n�o Cadastrada!');
     end
     else
     Dtm_Entrega.Qry_PagTransfVENDEDOR.Asstring := Dtm_Entrega.Qry_VendedorNOME.Asstring;
     Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.AsString := Dtm_Entrega.Qry_VendedorCAMINHO_FOTO.asstring;
     foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
end;

end.
