unit un_movrealizadas;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.Buttons, Vcl.Grids,
  Vcl.DBGrids, Vcl.StdCtrls, sButton, Vcl.Mask, RxToolEdit, Vcl.DBCtrls, RpBase,
  RpSystem, RpRave, RpDefine, RpCon, RpConDS;

type
  Tfrm_realizadas = class(TForm)
    Panel1: TPanel;
    DBGrid1: TDBGrid;
    SpeedButton1: TSpeedButton;
    Edit1: TEdit;
    data_pesq: TDateEdit;
    Label21: TLabel;
    DateEdit1: TDateEdit;
    DBNavigator1: TDBNavigator;
    sButton6: TSpeedButton;
    Radio: TRadioGroup;
    Rv_Ent_Real: TRvDataSetConnection;
    Rv_Entregas_Real: TRvProject;
    RvSystem1: TRvSystem;
    SpeedButton2: TSpeedButton;
    Label23: TLabel;
    Panel7: TPanel;
    Label1: TLabel;
    procedure FormShow(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure DBGrid1DrawColumnCell(Sender: TObject; const Rect: TRect;
      DataCol: Integer; Column: TColumn; State: TGridDrawState);
    procedure Edit1Change(Sender: TObject);
    procedure sButton6Click(Sender: TObject);
    procedure RadioClick(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frm_realizadas: Tfrm_realizadas;

implementation

{$R *.dfm}

uses un_entrega, un_entreal;

procedure Tfrm_realizadas.DBGrid1DrawColumnCell(Sender: TObject;
  const Rect: TRect; DataCol: Integer; Column: TColumn; State: TGridDrawState);
begin
   if Dtm_Entrega.qry_realizadasSITUACAO.asstring = 'ENTREGA REALIZADA' then
      begin
       dbgrid1.Canvas.Font.Color := clGreen;
       dbgrid1.Canvas.FillRect(Rect);
       dbgrid1.DefaultDrawDataCell(Rect, dbgrid1.columns[DataCol].Field, State);
      end;
end;

procedure Tfrm_realizadas.Edit1Change(Sender: TObject);
var
  Sql: string; // Pesquisando registros na tabela
  total : currency;
begin
   Dtm_Entrega.qry_realizadas.close;
   Dtm_Entrega.qry_realizadas.Sql.Clear;
   Dtm_Entrega.qry_realizadas.Sql.Add('select * from MOV_ENT_REALIZADAS');
   if (radio.ItemIndex = 1) then
    Sql := 'where CONDUTOR like ' + QuotedStr('%' + Edit1.Text + '%')
   else if (radio.ItemIndex = 0) then
    Sql := 'where DESTINO like ' + QuotedStr('%' + Edit1.Text + '%');
   Dtm_Entrega.qry_realizadas.Sql.Add(Sql);
   Dtm_Entrega.qry_realizadas.Sql.Add('order by DESTINO');
   Dtm_Entrega.qry_realizadas.open;
   total := 0;
   Dtm_Entrega.qry_realizadas.First;
   Dtm_Entrega.qry_realizadas.DisableControls;
   try
     while not Dtm_Entrega.qry_realizadas.eof do
     begin
        total := total + Dtm_Entrega.qry_realizadas.FieldByName('VALOR').AsCurrency;
        Dtm_Entrega.qry_realizadas.next;
     end;
     Dtm_Entrega.qry_realizadas.EnableControls;
     Label1.Caption := FormatFloat('#,###,###,##0.00', total);
   finally
   end;
end;

procedure Tfrm_realizadas.FormShow(Sender: TObject);
Var
  total : currency;
begin
    Dtm_Entrega.qry_realizadas.Open;
    total := 0;
    Dtm_Entrega.qry_realizadas.First;
    Dtm_Entrega.qry_realizadas.DisableControls;
    try
      while not Dtm_Entrega.qry_realizadas.eof do
      begin
         total := total + Dtm_Entrega.qry_realizadas.FieldByName('VALOR').AsCurrency;
         Dtm_Entrega.qry_realizadas.next;
      end;
      Dtm_Entrega.qry_realizadas.EnableControls;
      Label1.Caption := FormatFloat('#,###,###,##0.00', total);
    finally
    end;
end;

procedure Tfrm_realizadas.RadioClick(Sender: TObject);
begin
  edit1.SetFocus;
end;

procedure Tfrm_realizadas.sButton6Click(Sender: TObject);
var
  total : currency;
begin
   with Dtm_Entrega.qry_realizadas do
      begin
          Close;
          SQL.Clear;
          SQL.Text:='SELECT * FROM MOV_ENT_REALIZADAS '+
                    'WHERE DATA >= :DTINI AND DATA <= :DTFIM '+
                    'ORDER BY DATA';
          Parameters.ParamByName('dtini').Value := StrToDate(data_pesq.Text);
          Parameters.ParamByName('dtfim').Value := StrToDate(dateEdit1.Text);
          Open;
          Dtm_Entrega.qry_realizadas.Open;
          total := 0;
          Dtm_Entrega.qry_realizadas.First;
          Dtm_Entrega.qry_realizadas.DisableControls;
          try
            while not Dtm_Entrega.qry_realizadas.eof do
               begin
                 total := total + Dtm_Entrega.qry_realizadas.FieldByName('VALOR').AsCurrency;
                 Dtm_Entrega.qry_realizadas.next;
               end;
               Dtm_Entrega.qry_realizadas.EnableControls;
               Label1.Caption := FormatFloat('#,###,###,##0.00', total);
          finally
          end;
          if RecordCount = 0 Then
             begin
                MessageDlg('Não existe Movimento para este Período!', mtConfirmation, [mbOk], 0);
                Close;
             end;
      end;
end;

procedure Tfrm_realizadas.SpeedButton1Click(Sender: TObject);
begin
   Dtm_Entrega.qry_realizadas.Close;
   Close;
end;

procedure Tfrm_realizadas.SpeedButton2Click(Sender: TObject);
begin
   frm_entreal.showmodal;
end;

end.
